import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Users,
  Trophy,
  Zap,
  Star,
  Target,
  Gamepad2,
  MessageSquare,
} from "lucide-react";

function LandingPage() {
  const features = [
    {
      icon: <BookOpen size={32} />,
      title: "Interactive Learning",
      description:
        "Engage with dynamic content including videos, notes, and hands-on exercises",
    },
    {
      icon: <Users size={32} />,
      title: "Collaborative Environment",
      description:
        "Connect with peers and instructors through real-time chat and group activities",
    },
    {
      icon: <Trophy size={32} />,
      title: "Gamified Experience",
      description:
        "Earn points, unlock achievements, and compete on leaderboards",
    },
    {
      icon: <Zap size={32} />,
      title: "AI-Powered Summarizer",
      description:
        "Get instant summaries of complex topics with our intelligent content analyzer",
    },
    {
      icon: <Gamepad2 size={32} />,
      title: "Kahoot-Style Quizzes",
      description:
        "Compete in real-time multiplayer quizzes with friends and classmates",
    },
    {
      icon: <MessageSquare size={32} />,
      title: "Real-Time Chat",
      description:
        "Ask questions, share ideas, and study together with integrated messaging",
    },
  ];

  const courses = [
    { name: "Software Engineering", students: "12,500+" },
    { name: "Cybersecurity", students: "8,300+" },
    { name: "Data Science", students: "15,700+" },
    { name: "Web Development", students: "22,100+" },
  ];

  return (
    <div className="landing-page">
      <div className="container">
        <section className="hero card" style={{ padding: 28 }}>
          <h1 style={{ fontSize: 34, marginBottom: 10 }}>LearnSphere</h1>
          <p style={{ marginBottom: 16 }}>
            Transform your learning journey with our gamified, interactive
            platform. Compete, collaborate, and conquer knowledge like never
            before.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <Link to="/auth" className="btn-primary">Start Learning Today</Link>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Star size={20} /> <span>Join 50,000+ active learners</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
            {courses.map((course, index) => (
              <div key={index} className="course-card card" style={{ padding:12 }}>
                <div className="course-icon"><Target size={28} /></div>
                <h3>{course.name}</h3>
                <p>{course.students} students</p>
              </div>
            ))}
          </div>
        </section>

        <section className="features" style={{ marginTop: 18 }}>
          <h2>Why Choose LearnSphere?</h2>
          <p>Experience learning like never before with our cutting-edge features designed to maximize engagement and retention.</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:12, marginTop:12 }}>
            {features.map((f, i) => (
              <div key={i} className="feature-card card">
                <div style={{ marginBottom:8 }}>{f.icon}</div>
                <h4>{f.title}</h4>
                <p style={{ color:'#6b7280' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta" style={{ marginTop:18 }}>
          <div className="card" style={{ padding:20 }}>
            <h2>Ready to Level Up Your Learning?</h2>
            <p>Join thousands of students and teachers already using LearnSphere to achieve their educational goals.</p>
            <Link to="/auth" className="btn-light">Get Started Free</Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
