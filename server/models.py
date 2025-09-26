from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import JSON
from sqlalchemy.orm import relationship

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False, unique=True)
    email = db.Column(db.String(120), nullable=False, unique=True)
    password_hash = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(20), nullable=False)
    avatar = db.Column(db.String, nullable=True)
    points = db.Column(db.Integer, default=0)

    reviews = relationship("Review", back_populates="user")
    enrollments = relationship("Enrollment", back_populates="user")

    def __repr__(self):
        return f"<User {self.username}>"

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "role": self.role,
            "avatar": self.avatar,
            "points": self.points
        }

class Course(db.Model):
    __tablename__ = "courses"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text, nullable=False)
    category = db.Column(db.String(100), nullable=False)
    creator_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    creator = relationship("User", backref="courses")
    reviews = relationship("Review", back_populates="course", cascade="all, delete-orphan")
    modules = relationship("Module", back_populates="course", cascade="all, delete-orphan")
    enrollments = relationship("Enrollment", back_populates="course")

    def __repr__(self):
        return f"<Course {self.title}>"

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "category": self.category,
            "creator_id": self.creator_id
        }

class Review(db.Model):
    __tablename__ = "reviews"

    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.Text, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    course_id = db.Column(db.Integer, db.ForeignKey("courses.id"))

    user = relationship("User", back_populates="reviews")
    course = relationship("Course", back_populates="reviews")

    def __repr__(self):
        return f"<Review {self.rating} stars>"

    def to_dict(self):
        return {
            "id": self.id,
            "rating": self.rating,
            "comment": self.comment,
            "user_id": self.user_id,
            "course_id": self.course_id
        }

class Enrollment(db.Model):
    __tablename__ = "enrollments"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    course_id = db.Column(db.Integer, db.ForeignKey("courses.id"))
    progress = db.Column(db.Float, default=0.0)

    user = relationship("User", back_populates="enrollments")
    course = relationship("Course", back_populates="enrollments")

    def __repr__(self):
        return f"<Enrollment user={self.user_id}, course={self.course_id}>"

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "course_id": self.course_id,
            "progress": self.progress
        }

class Module(db.Model):
    __tablename__ = "modules"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    type = db.Column(db.String(20), nullable=False)
    content = db.Column(JSON, nullable=False)
    stars_required = db.Column(db.Integer, default=0)

    course_id = db.Column(db.Integer, db.ForeignKey("courses.id"))
    course = relationship("Course", back_populates="modules")

    def __repr__(self):
        return f"<Module {self.title}>"

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "type": self.type,
            "content": self.content,
            "stars_required": self.stars_required,
            "course_id": self.course_id,
        }