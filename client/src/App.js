// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import ModuleContent from "./pages/ModuleContent";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";
import Quiz from "./pages/Quiz";
import Auth from "./pages/Auth";
import Chat from "./pages/Chat";
import AvatarCustomizer from "./components/AvatarCustomizer";

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('learnsphere_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('learnsphere_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('learnsphere_user');
  };

  const updateUser = (updatedUserData) => {
    setUser(updatedUserData);
    localStorage.setItem('learnsphere_user', JSON.stringify(updatedUserData));
  };

  return (
    <Router>
      {user && <NavBar user={user} onLogout={handleLogout} />}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/auth" render={(props) => <Auth {...props} onLogin={handleLogin} />} />
        <Route path="/login" render={(props) => <Auth {...props} onLogin={handleLogin} />} />

        <Route path="/dashboard" render={() => (user ? <Dashboard user={user} updateUser={updateUser} /> : <Redirect to="/auth" />)} />
        <Route exact path="/courses" render={() => <Courses />} />
        <Route exact path="/course/:courseId" render={(props) => <CourseDetail {...props} user={user} updateUser={updateUser} />} />
        
        {/* ✅ Ensure route passes courseId and moduleId correctly */}
        <Route
          path="/course/:courseId/module/:moduleId"
          render={(props) =>
            props.match.params.courseId ? (
              <ModuleContent {...props} user={user} updateUser={updateUser} />
            ) : (
              <Redirect to="/courses" />
            )
          }
        />

        <Route path="/quiz/:courseId?" render={(props) => <Quiz {...props} user={user} updateUser={updateUser} />} />
        <Route path="/leaderboard" render={() => <Leaderboard user={user} />} />
        <Route path="/chat" render={() => <Chat user={user} />} />
        <Route path="/profile" render={() => (user ? <Profile user={user} updateUser={updateUser} /> : <Redirect to="/auth" />)} />
        <Route path="/avatar" render={() => (user ? <AvatarCustomizer user={user} updateUser={updateUser} /> : <Redirect to="/auth" />)} />

        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
