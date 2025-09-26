from flask import Blueprint, request, jsonify
from models import db, Enrollment

enrollment_bp = Blueprint("enrollment_bp", __name__)

# -----------------------
# Get all enrollments
# -----------------------
@enrollment_bp.route("/", methods=["GET"])
def get_enrollments():
    enrollments = Enrollment.query.all()
    return jsonify([e.to_dict() for e in enrollments])

# -----------------------
# Get enrollment by ID
# -----------------------
@enrollment_bp.route("/<int:enrollment_id>", methods=["GET"])
def get_enrollment(enrollment_id):
    enrollment = Enrollment.query.get_or_404(enrollment_id)
    return jsonify(enrollment.to_dict())

# -----------------------
# Create new enrollment
# -----------------------
@enrollment_bp.route("/", methods=["POST"])
def create_enrollment():
    data = request.json
    new_enrollment = Enrollment(
        user_id=data.get("user_id"),
        course_id=data.get("course_id"),
        progress=data.get("progress", 0)
    )
    db.session.add(new_enrollment)
    db.session.commit()
    return jsonify(new_enrollment.to_dict()), 201

# -----------------------
# Update enrollment
# -----------------------
@enrollment_bp.route("/<int:enrollment_id>", methods=["PUT"])
def update_enrollment(enrollment_id):
    enrollment = Enrollment.query.get_or_404(enrollment_id)
    data = request.json
    enrollment.progress = data.get("progress", enrollment.progress)
    db.session.commit()
    return jsonify(enrollment.to_dict())

# -----------------------
# Delete enrollment
# -----------------------
@enrollment_bp.route("/<int:enrollment_id>", methods=["DELETE"])
def delete_enrollment(enrollment_id):
    enrollment = Enrollment.query.get_or_404(enrollment_id)
    db.session.delete(enrollment)
    db.session.commit()
    return jsonify({"message": "Enrollment deleted"})
