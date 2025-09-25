import React, { useState, useEffect } from "react";
import { Trophy, Medal, Star, Award, TrendingUp, Users, Crown, Zap, Target, Calendar } from "lucide-react";

const Leaderboard = ({ user, allUsers = [] }) => {
  const [selectedPeriod, setSelectedPeriod] = useState("weekly");
  const [selectedCategory, setSelectedCategory] = useState("overall");
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const usersArray = Array.isArray(allUsers) ? allUsers : [];

const data = [...usersArray];
if (user) {
  const existingIndex = data.findIndex(u => u.username === user.username);
  if (existingIndex >= 0) data[existingIndex] = user;
  else data.push(user);
}

data.sort((a, b) => (b.points ?? 0) - (a.points ?? 0));
setLeaderboardData(data.map((u, i) => ({ ...u, rank: i + 1 })));
  }, [user, allUsers]);

  const topThree = leaderboardData.slice(0, 3);

  return (
    <div className="leaderboard-container container">
      <div className="leaderboard-header" style={{ display:'flex', alignItems:'center', gap:12 }}>
        <Trophy className="icon-lg yellow" />
        <div>
          <h1>Leaderboard</h1>
          <p>Compete with fellow learners and climb to the top!</p>
        </div>
      </div>

  <div className="filters-card card" style={{ padding:12, marginTop:12 }}>
    <div style={{ display:'flex', justifyContent:'space-between', gap:12 }}>
      <div>
        <h3><Calendar className="icon-sm" /> Time Period</h3>
        <div>
          {["daily","weekly","monthly","alltime"].map(p => (
            <button key={p} onClick={() => setSelectedPeriod(p)} className={selectedPeriod===p ? 'filter-btn active':'filter-btn'} style={{ marginRight:6 }}>
              {p === "daily" ? "Today" : p === "weekly" ? "This Week" : p === "monthly" ? "This Month" : "All Time"}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3><TrendingUp className="icon-sm" /> Category</h3>
        <div>
          {[
            {id:"overall", label:"Overall Points", icon:Trophy},
            {id:"quizzes", label:"Quiz Master", icon:Target},
            {id:"courses", label:"Course Completion", icon:Award},
            {id:"streaks", label:"Learning Streaks", icon:Zap}
          ].map(cat => (
            <button key={cat.id} onClick={() => setSelectedCategory(cat.id)} className={selectedCategory===cat.id ? 'filter-btn active':'filter-btn'} style={{ marginRight:6 }}>
              <cat.icon /> {cat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>

  <div className="podium" style={{ display:'flex', gap:12, marginTop:12 }}>
    {topThree.map((player) => (
      <div key={player.username} className={`podium-card place-${player.rank} card`} style={{ padding:12, textAlign:'center', flex:1 }}>
        {player.rank === 1 && <Crown className="crown" />}
        <div className="avatar-circle" style={{ width:72, height:72, borderRadius:9999, background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto' }}>
          {player.username?.[0] ?? "?"}
        </div>
        <h2>{player.rank === 1 ? "1st" : player.rank === 2 ? "2nd" : "3rd"}</h2>
        <h3>{player.username ?? "Unknown"}</h3>
        <p>{(player.points ?? 0).toLocaleString()} pts</p>
        <div style={{ opacity:0.6, display:'flex', gap:6, justifyContent:'center' }}>
          <Medal size={14} /> <Star size={14} /> <Users size={14} />
        </div>
      </div>
    ))}
  </div>

  <div className="leaderboard-list card" style={{ marginTop:12, padding:12 }}>
    {leaderboardData.map((entry) => (
      <div key={entry.username} className={`leaderboard-row ${entry.username === (user?.username ?? "") ? "current-user" : ""}`} style={{ display:'grid', gridTemplateColumns:'60px 1fr 80px 120px', alignItems:'center', padding:'8px 0', borderBottom:'1px solid #eef2f7' }}>
        <span className="rank">#{entry.rank}</span>
        <span className="name">{entry.username ?? "Unknown"}</span>
        <span className="badges" style={{ display:'flex', gap:6, alignItems:'center' }}>
          <Award className="icon-sm" /> {entry.badges ?? 0}
        </span>
        <span className="points">{(entry.points ?? 0).toLocaleString()} pts</span>
      </div>
    ))}
  </div>
</div>
  );
};

export default Leaderboard;