from flask import Blueprint, request, jsonify
from models import db, User
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token

user_bp = Blueprint("user_bp", __name__)
bcrypt = Bcrypt()

# -----------------------
# Get all users
# -----------------------
@user_bp.route("/", methods=["GET"])
def get_users():
    users = User.query.all()
    return jsonify([u.to_dict() for u in users])


# -----------------------
# Register new user
# -----------------------
@user_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")
    role = data.get("role", "student")

    if not username or not email or not password:
        return jsonify({"error": "Missing fields"}), 400

    if User.query.filter((User.email == email) | (User.username == username)).first():
        return jsonify({"error": "User already exists"}), 400

    password_hash = bcrypt.generate_password_hash(password).decode("utf-8")

    new_user = User(
        username=username,
        email=email,
        password_hash=password_hash,
        role=role,
        avatar=None,
        points=0
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "Account created successfully"}), 201


# -----------------------
# Login existing user
# -----------------------
@user_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"error": "Missing email or password"}), 400

    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"error": "User not found"}), 404

    if not bcrypt.check_password_hash(user.password_hash, password):
        return jsonify({"error": "Invalid password"}), 401

    access_token = create_access_token(identity=user.id)

    return jsonify({
        "user": user.to_dict(),
        "access_token": access_token
    }), 200