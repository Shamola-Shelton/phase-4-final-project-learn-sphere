from flask import Blueprint, request, jsonify
from app import db
from models import Review

review_bp = Blueprint("review_bp", __name__)

# -----------------------
# Create a review
# -----------------------
@review_bp.route("/", methods=["POST"])
def create_review():
    data = request.json
    review = Review(
        user_id=data["user_id"],
        course_id=data["course_id"],
        rating=data["rating"],
        comment=data.get("comment", "")
    )
    db.session.add(review)
    db.session.commit()
    return jsonify({"message": "Review added"}), 201


# -----------------------
# Get ALL reviews
# -----------------------
@review_bp.route("/", methods=["GET"])
def get_all_reviews():
    reviews = Review.query.all()
    return jsonify([{
        "id": r.id,
        "user_id": r.user_id,
        "course_id": r.course_id,
        "rating": r.rating,
        "comment": r.comment
    } for r in reviews])


# -----------------------
# Get reviews by course_id
# -----------------------
@review_bp.route("/<int:course_id>", methods=["GET"])
def get_reviews_by_course(course_id):
    reviews = Review.query.filter_by(course_id=course_id).all()
    return jsonify([{
        "id": r.id,
        "user_id": r.user_id,
        "rating": r.rating,
        "comment": r.comment
    } for r in reviews])