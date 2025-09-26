from flask import Blueprint, jsonify, request
from app import db
from models import Course

course_bp = Blueprint("courses", __name__)

@course_bp.route("/", methods=["GET"])
def get_courses():
    courses = Course.query.all()
    return jsonify([{
        "id": c.id,
        "title": c.title,
        "description": c.description,
        "category": c.category
    } for c in courses])

@course_bp.route("/", methods=["POST"])
def create_course():
    data = request.json
    course = Course(
        title=data["title"],
        description=data["description"],
        category=data.get("category"),
        creator_id=data.get("creator_id")
    )
    db.session.add(course)
    db.session.commit()
    return jsonify({"message": "Course created"}), 201

# ✅ Added route to get a single course by ID
@course_bp.route("/<int:course_id>", methods=["GET"])
def get_course(course_id):
    course = Course.query.get_or_404(course_id)
    return jsonify({
        "id": course.id,
        "title": course.title,
        "description": course.description,
        "category": course.category
    })