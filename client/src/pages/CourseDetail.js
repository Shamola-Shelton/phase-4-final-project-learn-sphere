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
    // Make sure courseId is defined before fetching
    if (!courseId) return;

    const foundCourse = coursesData.find((c) => c.id === courseId);
    setCourse(foundCourse);

    // Fetch modules only if course exists
    if (foundCourse) {
      setModules(foundCourse.modules || []);
    }
  }, [courseId]);

  const handleEnroll = async () => {
    if (!user) {
      history.push("/auth");
      return;
    }

    try {
      // 🔹 Send enrollment to backend
      const response = await fetch("http://127.0.0.1:5000/api/enrollments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: user.id, course_id: courseId }),
      });

      if (!response.ok) {
        throw new Error("Failed to enroll");
      }

      await response.json();

      // 🔹 Update local user state
      const updatedUser = {
        ...user,
        enrolledCourses: [...(user.enrolledCourses || []), courseId],
      };
      updateUser(updatedUser);
    } catch (error) {
      console.error("Enrollment error:", error);
    }
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
              <li key={mod.id}>
                <button
                  onClick={() =>
                    history.push(`/course/${courseId}/module/${mod.id}`)
                  }
                  className="btn-light"
                >
                  {mod.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CourseDetail;
