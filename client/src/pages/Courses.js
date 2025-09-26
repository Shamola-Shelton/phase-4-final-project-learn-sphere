import React, { useState } from "react";
import { Link } from "react-router-dom";
import datascience from "../images/datascience.jpeg";
import webdevelopment from "../images/webdevelopment.jpeg";
import cybersecurity from "../images/cybersecurity.jpeg";
import mobileappdevelopment from "../images/mobileappdevelopment.jpeg";
import programming from "../images/programming.jpeg";

// ✅ Full dataset for all courses (inline)
export const courses = [
  {
    id: "1",
    title: "Data Science Fundamentals",
    description: "Learn data analysis, visualization, and machine learning basics.",
    category: "Data Science",
    difficulty: "Beginner",
    duration: "6 weeks",
    rating: 4.8,
    studentsCount: 1200,
    instructor: "Dr. Ada Lovelace",
    thumbnail: datascience,
    languages: ["Python", "SQL"],
    modules: [
      { id: "1", title: "Introduction to Data Science", type: "video", content: "https://www.youtube.com/embed/FsSrzmRawUg", completed: false },
      { id: "2", title: "Data Collection & Cleaning", type: "video", content: "https://www.youtube.com/embed/WpX2F2BS3Qc", completed: false },
      { id: "3", title: "Exploratory Data Analysis in Data Science", type: "video", content: "https://www.youtube.com/embed/QiqZliDXCCg", completed: false },
      { id: "4", title: "Data Visualization in Data Science", type: "video", content: "https://www.youtube.com/embed/MiiANxRHSv4", completed: false },
      { id: "5", title: "Machine Learning Basics", type: "video", content: "https://www.youtube.com/embed/7eh4d6sabA0", completed: false },
    ],
  },
  {
    id: "2",
    title: "Web Development Bootcamp",
    description: "Master HTML, CSS, JavaScript, and React to build full websites.",
    category: "Web Development",
    difficulty: "Intermediate",
    duration: "8 weeks",
    rating: 4.7,
    studentsCount: 2500,
    instructor: "Grace Hopper",
    thumbnail: webdevelopment,
    languages: ["HTML", "CSS", "JavaScript", "React"],
    modules: [
      { id: "1", title: "Intro to Web Development", type: "video", content: "https://www.youtube.com/embed/5YDVJaItmaY", completed: false },
      { id: "2", title: "HTML for Beginners", type: "video", content: "https://www.youtube.com/embed/FQdaUv95mR8", completed: false },
      { id: "3", title: "Learn CSS in 20 Minutes", type: "video", content: "https://www.youtube.com/embed/1PnVor36_40", completed: false },
      { id: "4", title: "JavaScript Basics", type: "video", content: "https://www.youtube.com/embed/xwKbtUP87Dk", completed: false },
    ],
  },
  {
    id: "3",
    title: "Cyber Security Essentials",
    description: "Learn to secure systems, networks, and defend against cyber threats.",
    category: "Cyber Security",
    difficulty: "Advanced",
    duration: "10 weeks",
    rating: 4.9,
    studentsCount: 800,
    instructor: "Kevin Mitnick",
    thumbnail: cybersecurity,
    languages: ["Networking", "Linux"],
    modules: [
      { id: "1", title: "Introduction to Cybersecurity", type: "video", content: "https://www.youtube.com/embed/ULGILG-ZhO0", completed: false },
      { id: "2", title: "Networking Fundamentals", type: "video", content: "https://www.youtube.com/embed/cNwEVYkx2Kk", completed: false },
      { id: "3", title: "Cyber Threats & Attack Vectors", type: "video", content: "https://www.youtube.com/embed/lpPmrg720R4", completed: false },
    ],
  },
  {
    id: "4",
    title: "Mobile App Development",
    description: "Create mobile applications for Android and iOS with React Native.",
    category: "Mobile Development",
    difficulty: "Intermediate",
    duration: "7 weeks",
    rating: 4.6,
    studentsCount: 1500,
    instructor: "Linus Torvalds",
    thumbnail: mobileappdevelopment,
    languages: ["JavaScript", "React Native"],
    modules: [
      { id: "1", title: "Introduction to Mobile Apps", type: "video", content: "https://www.youtube.com/embed/yye7rSsiV6k", completed: false },
      { id: "2", title: "Mobile Platforms & Tools", type: "video", content: "https://www.youtube.com/embed/UJ8kiUWLXJg", completed: false },
      { id: "3", title: "UI Design & Security", type: "video", content: "https://www.youtube.com/embed/RIX4ufelA58", completed: false },
      { id: "4", title: "App Deployment", type: "video", content: "https://www.youtube.com/embed/2esQdKzRUCw", completed: false },
    ],
  },
  {
    id: "5",
    title: "Programming Fundamentals",
    description: "Understand the foundations of programming with Python.",
    category: "Programming",
    difficulty: "Beginner",
    duration: "5 weeks",
    rating: 4.5,
    studentsCount: 3000,
    instructor: "Bjarne Stroustrup",
    thumbnail: programming,
    languages: ["Python"],
    modules: [
      { id: "1", title: "Introduction to Programming", type: "video", content: "https://www.youtube.com/embed/F7CWjuaC6gw", completed: false },
      { id: "2", title: "Variables & Data Types", type: "video", content: "https://www.youtube.com/embed/cQT33yu9pY8", completed: false },
      { id: "3", title: "Control Structures & Functions", type: "video", content: "https://www.youtube.com/embed/Zp5MuPOtsSY", completed: false },
      { id: "4", title: "Programming Concepts", type: "video", content: "https://www.youtube.com/embed/kqtD5dpn9C8", completed: false },
    ],
  },
 
];

function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const categories = ["all", "Programming", "Data Science", "Web Development", "Cyber Security", "Mobile Development", "System Design"];
  const difficulties = ["all", "Beginner", "Intermediate", "Advanced"];

  const filteredCourses = (courses || []).filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "all" || course.difficulty === selectedDifficulty;

    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="container">
      <h1>Explore Courses</h1>
      <p className="subtitle">Discover amazing courses and start your learning journey today</p>

      <div className="filters" style={{ display: 'flex', gap: 8, marginTop: 8 }}>
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c === "all" ? "All Categories" : c}
            </option>
          ))}
        </select>
        <select value={selectedDifficulty} onChange={(e) => setSelectedDifficulty(e.target.value)}>
          {difficulties.map((d) => (
            <option key={d} value={d}>
              {d === "all" ? "All Levels" : d}
            </option>
          ))}
        </select>
      </div>

      <div className="course-grid">
        {filteredCourses.map((course) => (
          <Link key={course.id} to={`/course/${course.id}`} className="course-card">
            <img src={course.thumbnail} alt={course.title} />
            <div className="course-info">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p>
                <strong>{course.difficulty}</strong> · {course.duration}
              </p>
              <p>{course.studentsCount.toLocaleString()} students</p>
              <p>⭐ {course.rating}</p>
              <small>By {course.instructor}</small>
              <div className="tags">
                {course.languages.map((lang, i) => (
                  <span key={i} className="tag">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
        {filteredCourses.length === 0 && (
          <p className="no-results">No courses found. Try adjusting your filters.</p>
        )}
      </div>
    </div>
  );
}

export default Courses;