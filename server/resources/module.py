from flask import Blueprint, request, jsonify
from models import db, Module, Course, User   # ✅ import models instead of redefining

module_bp = Blueprint("module_bp", __name__)

# -----------------------
# Get all modules
# -----------------------
@module_bp.route("/", methods=["GET"])
def get_modules():
    modules = Module.query.all()
    return jsonify([m.to_dict() for m in modules])

# -----------------------
# Get modules by course ID
# -----------------------
@module_bp.route("/course/<int:course_id>", methods=["GET"])
def get_modules_by_course(course_id):
    modules = Module.query.filter_by(course_id=course_id).all()
    return jsonify([m.to_dict() for m in modules])

# -----------------------
# Get a single module by ID
# -----------------------
@module_bp.route("/<int:module_id>", methods=["GET"])
def get_module(module_id):
    module = Module.query.get_or_404(module_id)
    return jsonify(module.to_dict())

# -----------------------
# Create a new module
# -----------------------
@module_bp.route("/", methods=["POST"])
def create_module():
    data = request.json
    new_module = Module(
        title=data.get("title"),
        type=data.get("type"),
        content=data.get("content"),
        stars_required=data.get("stars_required", 0),
        course_id=data.get("course_id"),
    )
    db.session.add(new_module)
    db.session.commit()
    return jsonify(new_module.to_dict()), 201

# -----------------------
# Update a module
# -----------------------
@module_bp.route("/<int:module_id>", methods=["PUT"])
def update_module(module_id):
    module = Module.query.get_or_404(module_id)
    data = request.json
    module.title = data.get("title", module.title)
    module.type = data.get("type", module.type)
    module.content = data.get("content", module.content)
    module.stars_required = data.get("stars_required", module.stars_required)
    db.session.commit()
    return jsonify(module.to_dict())

# -----------------------
# Delete a module
# -----------------------
@module_bp.route("/<int:module_id>", methods=["DELETE"])
def delete_module(module_id):
    module = Module.query.get_or_404(module_id)
    db.session.delete(module)
    db.session.commit()
    return jsonify({"message": "Module deleted"})