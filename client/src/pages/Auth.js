import React, { useState } from 'react';
import { User, Mail, Lock, UserCheck, BookOpen } from 'lucide-react';
import { useHistory } from "react-router-dom";

function Auth({ onLogin }) {
  const history = useHistory(); // ✅ useHistory instead of history prop
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Validation for sign-up
    if (!isLogin) {
      if (formData.password !== formData.confirmPassword) {
        setMessage('Passwords do not match');
        setLoading(false);
        return;
      }
      if (formData.password.length < 6) {
        setMessage('Password must be at least 6 characters');
        setLoading(false);
        return;
      }
    }

    try {
      if (isLogin) {
        // Handle Sign In
        const response = await fetch('http://127.0.0.1:5000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          if (data.access_token) {
            localStorage.setItem('token', data.access_token);
          }
          onLogin(data.user);
          history.push("/dashboard"); // ✅ redirect after successful login
        } else {
          setMessage(data.error || 'Login failed');
        }
      } else {
        // Handle Sign Up - DON'T automatically log in
        const response = await fetch('http://127.0.0.1:5000/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: formData.username,
            email: formData.email,
            password: formData.password,
            role: formData.role,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          setMessage('Account created successfully! Please sign in.');
          setIsLogin(true); // Switch to login form
          setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            role: 'student'
          });
        } else {
          setMessage(data.error || 'Registration failed');
        }
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setMessage('');
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'student'
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-icon">
            <BookOpen size={32} color="#fff" />
          </div>
          <h1>LearnSphere</h1>
          <p>{isLogin ? 'Welcome back!' : 'Join the learning revolution'}</p>
        </div>

        <div className="auth-toggle">
          <button
            type="button"
            onClick={() => setIsLogin(true)}
            className={isLogin ? 'active' : ''}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setIsLogin(false)}
            className={!isLogin ? 'active' : ''}
          >
            Sign Up
          </button>
        </div>

        {message && (
          <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="input-group">
              <User className="input-icon" size={18} />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                required={!isLogin}
              />
            </div>
          )}

          <div className="input-group">
            <Mail className="input-icon" size={18} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <Lock className="input-icon" size={18} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          {!isLogin && (
            <>
              <div className="input-group">
                <Lock className="input-icon" size={18} />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-group">
                <UserCheck className="input-icon" size={18} />
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                </select>
              </div>
            </>
          )}

          <button type="submit" className="auth-submit" disabled={loading}>
            {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button onClick={switchMode}>
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Auth;