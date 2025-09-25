import React from 'react';
import { Link } from 'react-router-dom';
import { Play, BookOpen, MessageSquare, Trophy, User, Zap, Star, Award, TrendingUp } from 'lucide-react';
import AvatarCustomizer from '../components/AvatarCustomizer';

function Dashboard({ user, updateUser }) {
  const safeUser = {
    username: user?.username || 'Guest',
    points: user?.points || 0,
    stars: user?.stars || 3,
    level: user?.level || 1,
    enrolledCourses: user?.enrolledCourses || [],
    completedModules: user?.completedModules || {},
    achievements: user?.achievements || {},
    badges: user?.badges || []
  };

  const calculateProgress = (courseId) => {
    const completedModules = safeUser.completedModules[courseId] || [];
    const totalModules = 5; // adjust if needed
    return Math.round((completedModules.length / totalModules) * 100);
  };

  const getEnrolledCoursesWithProgress = () => {
    const enrolledCourseIds = safeUser.enrolledCourses;
    return [
      {
        id: '1',
        title: 'Data Science Fundamentals',
        progress: calculateProgress('1'),
        thumbnail: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=300',
        nextLesson: 'Machine Learning Basics',
      },
      {
        id: '2',
        title: 'Web Development Bootcamp', 
        progress: calculateProgress('2'),
        thumbnail: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=300',
        nextLesson: 'React Components',
      },
      {
        id: '3',
        title: 'Cybersecurity Essentials',
        progress: calculateProgress('3'),
        thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=300',
        nextLesson: 'Network Security',
      },
    ].filter(course => enrolledCourseIds.includes(course.id));
  };

  const getAchievementsList = () => [
    { name: 'First Steps', icon: '🎯', description: 'Complete your first module', earned: safeUser.achievements.firstSteps || false },
    { name: 'Quiz Master', icon: '🧠', description: 'Score 100% on a quiz', earned: safeUser.achievements.quizMaster || false },
    { name: 'Streak Keeper', icon: '🔥', description: '7-day learning streak', earned: safeUser.achievements.streakKeeper || false },
    { name: 'Social Learner', icon: '👥', description: 'Participate in chat discussions', earned: safeUser.achievements.socialLearner || false },
  ];

  const stats = [
    { label: 'Courses Enrolled', value: safeUser.enrolledCourses.length.toString(), icon: BookOpen, color: 'blue' },
    { label: 'Modules Completed', value: Object.values(safeUser.completedModules).flat().length.toString(), icon: Award, color: 'green' },
    { label: 'Points Earned', value: safeUser.points.toLocaleString(), icon: Star, color: 'yellow' },
    { label: 'Current Level', value: `Level ${safeUser.level}`, icon: TrendingUp, color: 'purple' },
  ];

  const enrolledCourses = getEnrolledCoursesWithProgress();
  const achievements = getAchievementsList();

  return (
    <div className="container">
      {/* Welcome Section */}
      <div className="welcome-box card" style={{
        padding: '24px',
        marginBottom: '20px',
        background: '#1f1f1f',
        color: 'white',
        borderRadius: '16px',
        boxShadow: '0 6px 25px rgba(124,58,237,0.4), 0 6px 25px rgba(6,182,212,0.3)'
      }}>
        <h1 style={{ margin: '0 0 8px 0', fontSize: '28px' }}>
          Welcome back, {safeUser.username}! 🚀
        </h1>
        <p style={{ margin: '0 0 16px 0', opacity: 0.9 }}>
          Ready to continue your learning journey? You've earned {safeUser.points} points so far!
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link to="/courses" className="btn-light" style={{ color: '#667eea' }}>
            <BookOpen size={16} /> Browse Courses
          </Link>
          <Link to="/quiz" className="btn-primary">
            <Zap size={16} /> Quick Quiz
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
        {stats.map((stat, index) => (
          <div key={index} className={`stat-card card`} style={{ 
            padding: '20px', 
            textAlign: 'center',
            background: '#1f1f1f',
            border: '1px solid #444',
            color: 'white'
          }}>
            <stat.icon size={24} color="white" />
            <h3 style={{ margin: '8px 0 4px 0', fontSize: '24px', fontWeight: 'bold' }}>
              {stat.value}
            </h3>
            <p style={{ margin: 0 }}>{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="dashboard-main" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        {/* Main Content */}
        <div>
          {/* Continue Learning Section */}
          <div className="learning-box card" style={{ padding: '20px', marginBottom: '20px', background: '#1f1f1f', color: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Play size={20} />
                Continue Learning
              </h2>
              <Link to="/courses" style={{ color: '#7c3aed', fontSize: '14px' }}>View All</Link>
            </div>

            {enrolledCourses.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px', color: '#9ca3af' }}>
                <BookOpen size={48} color="#6b7280" />
                <p style={{ marginTop: '12px' }}>No enrolled courses yet.</p>
                <Link to="/courses" className="btn-primary" style={{ marginTop: '12px' }}>
                  Browse Courses
                </Link>
              </div>
            ) : (
              <div style={{ display: 'flex', overflowX: 'auto', gap: '16px', paddingBottom: '8px' }}>
                {enrolledCourses.map((course) => (
                  <Link key={course.id} to={`/course/${course.id}`} className="course-card" style={{ 
                    minWidth: '280px',
                    textDecoration: 'none',
                    color: 'white'
                  }}>
                    <img src={course.thumbnail} alt={course.title} style={{ 
                      width: '100%',
                      height: '140px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      marginBottom: '8px'
                    }} />
                    <div>
                      <h3 style={{ margin: '0 0 4px 0', fontSize: '16px' }}>{course.title}</h3>
                      <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#9ca3af' }}>
                        Next: {course.nextLesson}
                      </p>
                      <div className="progress-bar" style={{ marginBottom: '4px', background:'#444', borderRadius:'4px', height:'8px' }}>
                        <div 
                          className="progress-fill" 
                          style={{ width: `${course.progress}%`, background:'#7c3aed', borderRadius:'4px', height:'100%' }}
                        />
                      </div>
                      <span style={{ fontSize: '12px', color: '#9ca3af' }}>{course.progress}% complete</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="card" style={{ padding: '20px', background:'#1f1f1f', color:'white' }}>
            <h2 style={{ margin: '0 0 16px 0' }}>Quick Actions</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              <Link to="/quiz" className="action-card" style={{
                padding: '16px',
                background: '#111',
                borderRadius: '10px',
                border: '1px solid #444',
                textDecoration: 'none',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s'
              }}>
                <Zap size={20} color="#7c3aed" />
                <span>Random Quiz</span>
              </Link>
              
              <Link to="/chat" className="action-card" style={{
                padding: '16px',
                background: '#111',
                borderRadius: '10px',
                border: '1px solid #444',
                textDecoration: 'none',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s'
              }}>
                <MessageSquare size={20} color="#06b6d4" />
                <span>Join Chat</span>
              </Link>
              
              <Link to="/leaderboard" className="action-card" style={{
                padding: '16px',
                background: '#111',
                borderRadius: '10px',
                border: '1px solid #444',
                textDecoration: 'none',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s'
              }}>
                <Trophy size={20} color="#fbbf24" />
                <span>Leaderboard</span>
              </Link>
              
              <Link to="/profile" className="action-card" style={{
                padding: '16px',
                background: '#111',
                borderRadius: '10px',
                border: '1px solid #444',
                textDecoration: 'none',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s'
              }}>
                <User size={20} color="#ef4444" />
                <span>Profile</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="dashboard-sidebar">
          {/* Avatar Customizer */}
          <div className="sidebar-box card" style={{ padding: '16px', marginBottom: '16px', background:'#1f1f1f', color:'white' }}>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '16px' }}>Customize Avatar</h3>
            <AvatarCustomizer user={user} updateUser={updateUser} />
          </div>

          {/* Achievements */}
          <div className="sidebar-box card" style={{ padding: '16px', marginBottom: '16px', background:'#1f1f1f', color:'white' }}>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Trophy size={16} />
              Achievements
            </h3>
            <div>
              {achievements.map((achievement, i) => (
                <div key={i} className={`achievement ${achievement.earned ? 'earned' : ''}`} style={{ 
                  display: 'flex', 
                  gap: '8px', 
                  alignItems: 'center', 
                  padding: '8px',
                  marginBottom: '4px',
                  borderRadius: '6px',
                  background: achievement.earned ? '#111' : '#1f1f1f',
                  opacity: achievement.earned ? 1 : 0.6,
                  color: 'white'
                }}>
                  <span style={{ fontSize: '16px' }}>
                    {achievement.earned ? achievement.icon : '🔒'}
                  </span>
                  <div>
                    <div style={{ fontWeight: '500', fontSize: '12px' }}>{achievement.name}</div>
                    <div style={{ fontSize: '10px', color: '#9ca3af' }}>{achievement.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Streak */}
          <div className="sidebar-box card" style={{ padding: '16px', background:'#1f1f1f', color:'white' }}>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              🔥 Learning Streak
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                fontSize: '24px', 
                fontWeight: 'bold',
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: '#fef3c7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#d97706'
              }}>
                {Math.floor(Math.random() * 10) + 1}
              </div>
              <div>
                <div style={{ fontWeight: '500' }}>Days in a row!</div>
                <div style={{ fontSize: '12px', color: '#9ca3af' }}>Keep it up! 🎯</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;