import React, { useState } from 'react';
import { 
  User as UserIcon, 
  Mail, 
  Calendar, 
  Award, 
  Star, 
  Trophy, 
  BookOpen,
  Target,
  TrendingUp,
  Settings,
  Edit3,
  Save,
  X
} from 'lucide-react';
import AvatarCustomizer from '../components/AvatarCustomizer';

const Profile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user || {});

  const achievements = [
    { id: '1', name: 'First Steps', description: 'Complete your first course', icon: '🎯', rarity: 'common', earned: true, earnedDate: '2024-01-15' },
    { id: '2', name: 'Quiz Master', description: 'Score 100% on 5 quizzes', icon: '🧠', rarity: 'rare', earned: true, earnedDate: '2024-01-20' },
    { id: '3', name: 'Speed Learner', description: 'Complete a course in under 24 hours', icon: '⚡', rarity: 'epic', earned: false, earnedDate: null },
    { id: '4', name: 'Social Butterfly', description: 'Chat with 50 different users', icon: '🦋', rarity: 'rare', earned: false, earnedDate: null },
    { id: '5', name: 'Perfectionist', description: 'Maintain 100% quiz accuracy for a week', icon: '💎', rarity: 'legendary', earned: false, earnedDate: null },
    { id: '6', name: 'Night Owl', description: 'Complete lessons after midnight 10 times', icon: '🦉', rarity: 'common', earned: true, earnedDate: '2024-01-25' }
  ];

  const stats = [
    { label: 'Courses Completed', value: '8', icon: BookOpen, color: 'blue-purple' },
    { label: 'Total Points', value: (user?.points ?? 0).toLocaleString(), icon: Star, color: 'yellow-orange' },
    { label: 'Quizzes Taken', value: '47', icon: Target, color: 'green-teal' },
    { label: 'Learning Streak', value: '12 days', icon: TrendingUp, color: 'red-pink' },
  ];

  const recentActivity = [
    { action: 'Completed', item: 'JavaScript Arrays Quiz', points: 150, time: '2 hours ago' },
    { action: 'Started', item: 'React Hooks Course', points: 0, time: '5 hours ago' },
    { action: 'Earned', item: 'Quiz Master Badge', points: 500, time: '1 day ago' },
    { action: 'Completed', item: 'CSS Flexbox Module', points: 200, time: '2 days ago' },
    { action: 'Joined', item: 'JavaScript Study Group', points: 0, time: '3 days ago' }
  ];

  const getRarityClass = (rarity) => {
    switch (rarity) {
      case 'common': return 'rarity-common';
      case 'rare': return 'rarity-rare';
      case 'epic': return 'rarity-epic';
      case 'legendary': return 'rarity-legendary';
      default: return 'rarity-common';
    }
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser(user || {});
    setIsEditing(false);
  };

  return (
    <div className="profile-page container">
      <div className="profile-container">
        <div className="profile-header card" style={{ padding:12 }}>
          <div className="edit-buttons" style={{ display:'flex', justifyContent:'flex-end' }}>
            {!isEditing ? (
              <button className="btn edit" onClick={() => setIsEditing(true)}>
                <Edit3 className="icon" /> Edit Profile
              </button>
            ) : (
              <div className="edit-actions" style={{ display:'flex', gap:8 }}>
                <button className="btn save" onClick={handleSave}>
                  <Save className="icon" /> Save
                </button>
                <button className="btn cancel" onClick={handleCancel}>
                  <X className="icon" /> Cancel
                </button>
              </div>
            )}
          </div>
          <div className="profile-body" style={{ display:'flex', gap:12, alignItems:'center' }}>
            <div className="profile-info" style={{ display:'flex', gap:12, alignItems:'center' }}>
              <div className="avatar-box">
                <div className="avatar-circle" style={{ width:100, height:100, borderRadius:12, background:'#fff', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <UserIcon className="avatar-icon" />
                </div>
                <div className="trophy-badge"><Trophy /></div>
              </div>
              <div>
                {isEditing ? (
                  <div className="edit-fields">
                    <input 
                      type="text" 
                      value={editedUser.username ?? ''} 
                      onChange={(e) => setEditedUser({...editedUser, username: e.target.value})} 
                    />
                    <input 
                      type="email" 
                      value={editedUser.email ?? ''} 
                      onChange={(e) => setEditedUser({...editedUser, email: e.target.value})} 
                    />
                  </div>
                ) : (
                  <>
                    <h1>{user?.username ?? "Guest"}</h1>
                    <div className="user-details" style={{ display:'flex', gap:12 }}>
                      <span><Mail className="icon" /> {user?.email ?? "No email provided"}</span>
                      <span><Calendar className="icon" /> Joined Jan 2024</span>
                    </div>
                  </>
                )}
                <div className="stats-summary" style={{ display:'flex', gap:12, marginTop:12 }}>
                  <div><span>{user?.level ?? 0}</span><p>Level</p></div>
                  <div><span>{user?.stars ?? 0}</span><p>Stars</p></div>
                  <div><span>{achievements.filter(a => a.earned).length}</span><p>Badges</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-grid" style={{ display:'grid', gridTemplateColumns:'2fr 1fr', gap:12, marginTop:12 }}>
          <div className="main-content">
            <div className="stats-grid" style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:12 }}>
              {stats.map((s, i) => (
                <div key={i} className={`stat-card ${s.color} card`} style={{ padding:12 }}>
                  <div>
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                  <div className="stat-icon"><s.icon /></div>
                </div>
              ))}
            </div>

            <div className="recent-activity card" style={{ padding:12, marginTop:12 }}>
              <h2><TrendingUp className="icon" /> Recent Activity</h2>
              {recentActivity.map((a, i) => (
                <div key={i} className="activity-card" style={{ display:'flex', justifyContent:'space-between', padding:8 }}>
                  <div style={{ display:'flex', gap:8 }}>
                    <div className="activity-icon" style={{ width:40, height:40, borderRadius:8, background:'#fff', display:'flex', alignItems:'center', justifyContent:'center' }}>{a.action.charAt(0)}</div>
                    <div>
                      <p style={{ margin:0 }}><strong>{a.action}</strong> <span>{a.item}</span></p>
                      <small>{a.time}</small>
                    </div>
                  </div>
                  {a.points > 0 && <div className="points">+{a.points} pts</div>}
                </div>
              ))}
            </div>

            <div className="achievements card" style={{ padding:12, marginTop:12 }}>
              <h2><Award className="icon" /> Achievements</h2>
              <div className="achievements-grid" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:12, marginTop:12 }}>
                {achievements.map((ach) => (
                  <div key={ach.id} className={`achievement ${ach.earned ? 'earned' : 'locked'}`} style={{ padding:12, display:'flex', gap:12, alignItems:'center', background:'#fff', borderRadius:10 }}>
                    <div className={`achievement-icon ${getRarityClass(ach.rarity)}`} style={{ fontSize:26 }}>{ach.earned ? ach.icon : '🔒'}</div>
                    <div>
                      <h3 style={{ margin:0 }}>{ach.name}</h3>
                      <p style={{ margin:0, color:'#6b7280' }}>{ach.description}</p>
                      <div className="achievement-footer" style={{ display:'flex', gap:8, marginTop:6 }}>
                        <span className={`rarity-tag ${getRarityClass(ach.rarity)}`}>{ach.rarity}</span>
                        {ach.earned && ach.earnedDate && <span>{new Date(ach.earnedDate).toLocaleDateString()}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="sidebar">
            <div className="sidebar-card card" style={{ padding:12 }}>
              <h2><Settings className="icon" /> Customize Avatar</h2>
              <AvatarCustomizer user={user} />
            </div>

            <div className="sidebar-card progress-card card" style={{ padding:12, marginTop:12 }}>
              <h2>Level Progress</h2>
              <div className="progress-level" style={{ fontSize:20 }}>{user?.level ?? 0}</div>
              <div className="progress-bar" style={{ marginTop:8 }}>
                <div style={{ width: `${((user?.points ?? 0) % 1000) / 10}%`, height:10, background:'linear-gradient(90deg,#7c3aed,#06b6d4)', borderRadius:9999 }}></div>
              </div>
              <div className="progress-footer" style={{ display:'flex', justifyContent:'space-between', marginTop:8 }}>
                <span>{(user?.points ?? 0) % 1000} / 1000 XP</span>
                <span>Next: Level {(user?.level ?? 0) + 1}</span>
              </div>
            </div>

            <div className="sidebar-card quick-stats card" style={{ padding:12, marginTop:12 }}>
              <h2>Quick Stats</h2>
              <div style={{ display:'flex', justifyContent:'space-between', padding:'6px 0' }}><span>Courses in Progress</span><strong>3</strong></div>
              <div style={{ display:'flex', justifyContent:'space-between', padding:'6px 0' }}><span>Average Quiz Score</span><strong>87%</strong></div>
              <div style={{ display:'flex', justifyContent:'space-between', padding:'6px 0' }}><span>Study Time This Week</span><strong>12.5h</strong></div>
              <div style={{ display:'flex', justifyContent:'space-between', padding:'6px 0' }}><span>Global Rank</span><strong>#234</strong></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
