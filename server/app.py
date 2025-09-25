from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from models import db
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager

def create_app():
    app = Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///learnsphere.db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["JWT_SECRET_KEY"] = "super-secret"

    # Initialize extensions
    db.init_app(app)
    Migrate(app, db)
    bcrypt = Bcrypt(app)
    jwt = JWTManager(app)
    CORS(app, supports_credentials=True)

    # Register blueprints
    from resources.user import user_bp
    from resources.course import course_bp
    from resources.review import review_bp
    from resources.enrollment import enrollment_bp
    from resources.module import module_bp

    app.register_blueprint(user_bp, url_prefix="/api/users")
    app.register_blueprint(course_bp, url_prefix="/api/courses")
    app.register_blueprint(review_bp, url_prefix="/api/reviews")
    app.register_blueprint(enrollment_bp, url_prefix="/api/enrollments")
    app.register_blueprint(module_bp, url_prefix="/api/modules")

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)