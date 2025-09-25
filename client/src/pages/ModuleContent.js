import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { ArrowLeft, BookOpen, Zap, Play, CheckCircle, ArrowRight } from 'lucide-react';
import coursesData from "../utils/coursesData";
import summarizeText from "../utils/summarizer";

const ModuleContent = ({ user, updateUser }) => {
  const { courseId, moduleId } = useParams();
  const history = useHistory();
  const [course, setCourse] = useState(null);
  const [module, setModule] = useState(null);
  const [showSummary, setShowSummary] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (!courseId || !moduleId) return; // ✅ Prevent undefined fetch

    const foundCourse = coursesData.find((c) => c.id === courseId);
    setCourse(foundCourse);
    
    if (foundCourse) {
      const foundModule = foundCourse.modules.find((m) => m.id === moduleId);
      setModule(foundModule);

      // Check if module is completed
      const completedModules = user?.completedModules?.[courseId] || [];
      setIsCompleted(completedModules.includes(moduleId));
    }
  }, [courseId, moduleId, user]);

  const handleCompleteModule = () => {
    if (!user || isCompleted) return;

    const completedModules = user.completedModules?.[courseId] || [];
    const updatedCompletedModules = [...completedModules, moduleId];

    const updatedUser = {
      ...user,
      completedModules: {
        ...user.completedModules,
        [courseId]: updatedCompletedModules
      },
      points: user.points + 100,
      stars: user.stars + (Math.random() > 0.7 ? 1 : 0)
    };

    // Check for achievements
    const totalCompletedModules = Object.values(updatedUser.completedModules).flat().length;
    if (totalCompletedModules === 1 && !updatedUser.achievements.firstSteps) {
      updatedUser.achievements.firstSteps = true;
      updatedUser.badges = [...(updatedUser.badges || []), 'First Steps'];
      updatedUser.points += 200;
    }

    updateUser(updatedUser);
    setIsCompleted(true);
  };

  const getNextModule = () => {
    if (!course) return null;
    const currentIndex = course.modules.findIndex(m => m.id === moduleId);
    return currentIndex < course.modules.length - 1 ? course.modules[currentIndex + 1] : null;
  };

  const goToNextModule = () => {
    const nextModule = getNextModule();
    if (nextModule) {
      history.push(`/course/${courseId}/module/${nextModule.id}`);
    } else {
      history.push(`/course/${courseId}`);
    }
  };

  if (!course || !module) {
    return (
      <div className="container">
        <p>Module not found.</p>
      </div>
    );
  }

  const moduleNotes = module.content?.notes || module.notes || "No content available.";
  const moduleSummary = module.content?.auto_summary || module.summary;
  const moduleQuiz = module.content?.quiz || [];

  return (
    <div className="container">
      <div className="back-link">
        <button onClick={() => history.push(`/course/${courseId}`)}>
          <ArrowLeft size={16} /> Back to Course
        </button>
      </div>

      <div className="module-header" style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <BookOpen size={24} color="#7c3aed" />
          <span style={{ color: '#6b7280', fontSize: '14px' }}>{course.title}</span>
        </div>
        <h1 style={{ margin: '0 0 8px 0', fontSize: '28px', fontWeight: 'bold' }}>
          {module.title}
        </h1>
        {isCompleted && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#059669', fontWeight: '500' }}>
            <CheckCircle size={16} />
            <span>Completed</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="card" style={{ padding: '24px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={20} />
            Module Content
          </h2>
          <button
            onClick={() => setShowSummary(!showSummary)}
            className="btn-light"
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <Zap size={16} />
            {showSummary ? "Show Full Content" : "Auto-Summarize"}
          </button>
        </div>

        <div style={{ 
          lineHeight: '1.7', 
          fontSize: '16px',
          background: '#f8fafc',
          padding: '20px',
          borderRadius: '8px',
          border: '1px solid #e2e8f0'
        }}>
          <p>
            {showSummary 
              ? (moduleSummary || summarizeText(moduleNotes))
              : moduleNotes
            }
          </p>
        </div>
      </div>

      {/* Video Section (Placeholder) */}
      <div className="card" style={{ padding: '24px', marginBottom: '20px' }}>
        <h2 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Play size={20} />
          Educational Video
        </h2>
        <div style={{ 
          background: '#f1f5f9', 
          padding: '40px', 
          borderRadius: '8px', 
          textAlign: 'center',
          border: '2px dashed #cbd5e1'
        }}>
          <Play size={48} color="#64748b" />
          <p style={{ margin: '16px 0 0 0', color: '#64748b' }}>
            Video content for "{module.title}"
            <br />
            <small>In a full implementation, this would contain an embedded video</small>
          </p>
        </div>
      </div>

      {/* Quiz Section */}
      {moduleQuiz.length > 0 && (
        <div className="card" style={{ padding: '24px', marginBottom: '20px' }}>
          <h2 style={{ margin: '0 0 16px 0' }}>Quick Knowledge Check</h2>
          <p style={{ marginBottom: '16px', color: '#6b7280' }}>
            Test your understanding with these questions:
          </p>
          <div style={{ background: '#fef7e7', padding: '16px', borderRadius: '8px', border: '1px solid #fbbf24' }}>
            <p style={{ margin: 0, fontWeight: '500' }}>
              {moduleQuiz.length} questions available
            </p>
            <button 
              onClick={() => history.push(`/quiz/${courseId}?module=${moduleId}`)}
              className="btn-primary"
              style={{ marginTop: '12px' }}
            >
              Start Quiz
            </button>
          </div>
        </div>
      )}

      {/* Completion Actions */}
      <div className="card" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ margin: '0 0 8px 0' }}>Module Progress</h3>
            <p style={{ margin: 0, color: '#6b7280' }}>
              {isCompleted ? 'Great job! You completed this module.' : 'Mark as complete to earn points and unlock the next module.'}
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            {!isCompleted ? (
              <button
                onClick={handleCompleteModule}
                className="btn-primary"
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <CheckCircle size={16} />
                Complete Module (+100 pts)
              </button>
            ) : (
              getNextModule() && (
                <button
                  onClick={goToNextModule}
                  className="btn-primary"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  Next Module
                  <ArrowRight size={16} />
                </button>
              )
            )}
          </div>
        </div>

        {isCompleted && !getNextModule() && (
          <div style={{ marginTop: '16px', padding: '16px', background: '#f0fdf4', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
            <p style={{ margin: 0, color: '#166534', fontWeight: '500' }}>
              🎉 Congratulations! You've completed all modules in this course. Ready for the final assessment?
            </p>
            <button
              onClick={() => history.push(`/quiz/${courseId}`)}
              className="btn-primary"
              style={{ marginTop: '12px' }}
            >
              Take Final Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModuleContent;
