import React, { useState, useEffect, useRef } from 'react';
import { Send, Hash, Users, HelpCircle, Shuffle, User } from 'lucide-react';

const Chat = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [activeRoom, setActiveRoom] = useState('general');
  const [onlineUsers, setOnlineUsers] = useState([]);
  const messagesEndRef = useRef(null);

  const chatRooms = [
    { id: 'general', name: 'General', icon: Hash, description: 'General discussion' },
    { id: 'data-science', name: 'Data Science', icon: Hash, description: 'Data Science course discussions' },
    { id: 'web-dev', name: 'Web Development', icon: Hash, description: 'Web Development discussions' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Hash, description: 'Cybersecurity discussions' },
    { id: 'mobile-dev', name: 'Mobile Development', icon: Hash, description: 'Mobile app development' },
    { id: 'programming', name: 'Programming', icon: Hash, description: 'Programming fundamentals' },
    { id: 'help', name: 'Help & Support', icon: HelpCircle, description: 'Get help from instructors and peers' },
    { id: 'random', name: 'Random', icon: Shuffle, description: 'Off-topic conversations' }
  ];

  // Mock data for demonstration
  useEffect(() => {
    // Initialize with some sample messages
    const sampleMessages = [
      {
        id: '1',
        user: 'instructor_sarah',
        username: 'Sarah (Instructor)',
        message: 'Welcome to the LearnSphere chat! Feel free to ask questions and help each other learn.',
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        room: 'general',
        isInstructor: true
      },
      {
        id: '2',
        user: 'student_alex',
        username: 'Alex',
        message: 'Hi everyone! Excited to be learning here.',
        timestamp: new Date(Date.now() - 1800000).toISOString(),
        room: 'general',
        isInstructor: false
      },
      {
        id: '3',
        user: 'student_maya',
        username: 'Maya',
        message: 'Can someone help me with the Data Science quiz? I\'m stuck on question 3.',
        timestamp: new Date(Date.now() - 900000).toISOString(),
        room: 'data-science',
        isInstructor: false
      }
    ];

setMessages(sampleMessages);

// Mock online users
setOnlineUsers([
  { id: '1', username: 'Alex', isInstructor: false },
  { id: '2', username: 'Maya', isInstructor: false },
  { id: '3', username: 'Sarah', isInstructor: true },
  { id: '4', username: user?.username || 'You', isInstructor: false }
]);
  }, [user]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!newMessage.trim() || !user) return;

const message = {
  id: Date.now().toString(),
  user: user.id,
  username: user.username,
  message: newMessage.trim(),
  timestamp: new Date().toISOString(),
  room: activeRoom,
  isInstructor: user.role === 'teacher'
};

setMessages(prev => [...prev, message]);
setNewMessage('');
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getMessagesForRoom = () => {
    return messages.filter(msg => msg.room === activeRoom);
  };

  const getRoomInfo = () => {
    return chatRooms.find(room => room.id === activeRoom);
  };

  if (!user) {
    return (
      <div className="container">
        <div className="card" style={{ padding: '40px', textAlign: 'center' }}>
          <h2>Please log in to access chat</h2>
          <p>You need to be logged in to participate in discussions.</p>
        </div>
      </div>
    );
  }

  const roomInfo = getRoomInfo();
  const roomMessages = getMessagesForRoom();

  return (
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr 250px', gap: '16px', height: '70vh' }}>

        {/* Sidebar - Chat Rooms */}
        <div className="card" style={{ padding: '16px', overflowY: 'auto' }}>
          <h3 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Hash size={18} />
            Chat Rooms
          </h3>
          
          <div>
            {chatRooms.map(room => (
              <button
                key={room.id}
                onClick={() => setActiveRoom(room.id)}
                className={`room-button ${activeRoom === room.id ? 'active' : ''}`}
                style={{
                  width: '100%',
                  padding: '12px',
                  marginBottom: '4px',
                  background: activeRoom === room.id ? '#f3e8ff' : 'transparent',
                  border: 'none',
                  borderRadius: '8px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: activeRoom === room.id ? '#7c3aed' : '#6b7280'
                }}
                onMouseEnter={(e) => {
                  if (activeRoom !== room.id) {
                    e.target.style.background = '#f8fafc';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeRoom !== room.id) {
                    e.target.style.background = 'transparent';
                  }
                }}
              >
                <room.icon size={16} />
                <div>
                  <div style={{ fontWeight: '500' }}>#{room.name}</div>
                  <div style={{ fontSize: '12px', opacity: 0.7 }}>{room.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

    {/* Main Chat Area */}
    <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Chat Header */}
      <div style={{ 
        padding: '16px', 
        borderBottom: '1px solid #e2e8f0',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <roomInfo.icon size={20} color="#7c3aed" />
        <div>
          <h3 style={{ margin: 0 }}>#{roomInfo.name}</h3>
          <p style={{ margin: 0, fontSize: '12px', color: '#6b7280' }}>
            {roomInfo.description}
          </p>
        </div>
      </div>

      {/* Messages */}
      <div style={{ 
        flex: 1, 
        overflowY: 'auto', 
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        {roomMessages.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#6b7280', padding: '40px' }}>
            <Hash size={48} color="#d1d5db" />
            <p>No messages in #{roomInfo.name} yet.</p>
            <p>Be the first to start the conversation!</p>
          </div>
        ) : (
          roomMessages.map(msg => (
            <div key={msg.id} className="message" style={{
              display: 'flex',
              gap: '12px',
              padding: msg.user === user.id ? '8px 12px 8px 8px' : '8px',
              borderRadius: '8px',
              background: msg.user === user.id ? '#f0f9ff' : 'transparent'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: msg.isInstructor ? '#7c3aed' : '#06b6d4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '12px',
                fontWeight: 'bold',
                flexShrink: 0
              }}>
                {msg.username.charAt(0).toUpperCase()}
              </div>
              
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  marginBottom: '4px'
                }}>
                  <span style={{ 
                    fontWeight: '600',
                    color: msg.isInstructor ? '#7c3aed' : '#374151'
                  }}>
                    {msg.username}
                  </span>
                  {msg.isInstructor && (
                    <span style={{
                      background: '#7c3aed',
                      color: 'white',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontSize: '10px',
                      fontWeight: '500'
                    }}>
                      INSTRUCTOR
                    </span>
                  )}
                  <span style={{ 
                    fontSize: '12px', 
                    color: '#6b7280'
                  }}>
                    {formatTime(msg.timestamp)}
                  </span>
                </div>
                <p style={{ 
                  margin: 0, 
                  lineHeight: '1.4',
                  wordBreak: 'break-word'
                }}>
                  {msg.message}
                </p>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <form onSubmit={handleSendMessage} style={{
        padding: '16px',
        borderTop: '1px solid #e2e8f0',
        display: 'flex',
        gap: '8px'
      }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder={`Message #${roomInfo.name}`}
          style={{
            flex: 1,
            padding: '12px',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            outline: 'none'
          }}
          onFocus={(e) => e.target.style.borderColor = '#7c3aed'}
          onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
        />
        <button
          type="submit"
          className="btn-primary"
          disabled={!newMessage.trim()}
          style={{
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          <Send size={16} />
        </button>
      </form>
    </div>

    {/* Online Users Sidebar */}
    <div className="card" style={{ padding: '16px', overflowY: 'auto' }}>
      <h3 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Users size={18} />
        Online ({onlineUsers.length})
      </h3>
      
      <div>
        {onlineUsers.map(onlineUser => (
          <div
            key={onlineUser.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px',
              borderRadius: '6px',
              marginBottom: '4px'
            }}
          >
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#22c55e'
            }} />
            <User size={14} color="#6b7280" />
            <span style={{ 
              fontSize: '14px',
              color: onlineUser.isInstructor ? '#7c3aed' : '#374151',
              fontWeight: onlineUser.isInstructor ? '600' : '400'
            }}>
              {onlineUser.username}
              {onlineUser.isInstructor && ' 👨‍🏫'}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
  );
};

export default Chat;