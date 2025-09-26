// src/pages/CourseDetail.js
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import coursesData from "../utils/coursesData";

const CourseDetail = ({ user, updateUser }) => {
  const { courseId } = useParams();
  const history = useHistory();
  const [course, setCourse] = useState(null);
  const [modules, setModules] = useState([]);

  useEffect(() => {
    if (!courseId) return;

    const foundCourse = coursesData.find((c) => c.id === courseId);
    setCourse(foundCourse);

    if (foundCourse && Array.isArray(foundCourse.modules)) {
      setModules(foundCourse.modules);
    }
  }, [courseId]);

  const handleEnroll = () => {
    if (!user) {
      history.push("/auth");
      return;
    }

    const updatedUser = {
      ...user,
      enrolledCourses: [...(user.enrolledCourses || []), courseId]
    };
    updateUser(updatedUser);
  };

  if (!course) {
    return (
      <div className="container">
        <p>Course not found.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>{course.title}</h1>
      <p>{course.description}</p>

      {!user?.enrolledCourses?.includes(courseId) && (
        <button onClick={handleEnroll} className="btn-primary">
          Enroll
        </button>
      )}

      {user?.enrolledCourses?.includes(courseId) && (
        <div>
          <h2>Modules</h2>
          <ul>
            {modules.map((mod) => (
              <li key={mod.id} className="module-item">
                <button
                  onClick={() =>
                    history.push(`/course/${courseId}/module/${mod.id}`)
                  }
                  className="btn-light"
                >
                  {mod.title}
                </button>

                {/* Only show quiz button if this module has a quiz */}
                {Array.isArray(mod.quiz) && mod.quiz.length > 0 && (
                  <button
                    onClick={() =>
                      history.push(`/quiz/${courseId}?module=${mod.id}`)
                    }
                    className="btn-quiz"
                  >
                    Take Module Quiz
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* Course-level quiz button */}
          {Array.isArray(course.quiz) && course.quiz.length > 0 && (
            <div style={{ marginTop: "20px" }}>
              <button
                onClick={() => history.push(`/quiz/${courseId}`)}
                className="btn-quiz-primary"
              >
                Take Course Quiz
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CourseDetail;