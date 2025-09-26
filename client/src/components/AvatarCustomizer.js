import React, { useState } from 'react';
import { Palette, Eye, Shirt, Crown, Save, RotateCcw } from 'lucide-react';

function AvatarCustomizer({ user, updateUser }) {
  // Provide a default avatar if user.avatar is undefined
  const defaultAvatar = {
    skinColor: '#F4A460',
    hairColor: '#8B4513',
    hairStyle: 'short',
    eyeColor: '#4B5563',
    outfit: 'casual',
    accessory: 'none'
  };

  const [avatar, setAvatar] = useState(user?.avatar || defaultAvatar);
  const [hasChanges, setHasChanges] = useState(false);

  const skinColors = ['#F4A460', '#DEB887', '#CD853F', '#8B4513', '#A0522D', '#D2691E'];
  const hairColors = ['#8B4513', '#000000', '#FFD700', '#FF4500', '#9400D3', '#32CD32'];
  const hairStyles = ['short', 'long', 'curly', 'bald', 'ponytail'];
  const eyeColors = ['#4B5563', '#059669', '#2563EB', '#7C3AED', '#DC2626'];
  const outfits = ['casual', 'formal', 'sporty', 'hoodie', 'dress'];
  const accessories = ['none', 'glasses', 'hat', 'earrings', 'necklace'];

  const handleAvatarChange = (property, value) => {
    setAvatar(prev => ({ ...prev, [property]: value }));
    setHasChanges(true);
  };

  const saveChanges = () => {
    if (updateUser) {
      const updatedUser = {
        ...user,
        avatar: avatar
      };
      updateUser(updatedUser);
      setHasChanges(false);
      
      // Show success message (you could add a toast notification here)
      alert('Avatar saved successfully!');
    }
  };

  const resetChanges = () => {
    setAvatar(user?.avatar || defaultAvatar);
    setHasChanges(false);
  };

  const AvatarPreview = () => (
    <div className="avatar-preview" style={{ marginBottom: '20px' }}>
      <svg viewBox="0 0 100 100" className="avatar-svg" style={{ width: '140px', height: '140px' }}>
        {/* Face */}
        <circle cx="50" cy="40" r="25" fill={avatar.skinColor} />
        
        {/* Hair */}
        {avatar.hairStyle !== 'bald' && (
          <path
            d={avatar.hairStyle === 'long' 
              ? "M25 35 Q50 15 75 35 Q75 25 50 20 Q25 25 25 35 L20 50 Q50 45 80 50"
              : avatar.hairStyle === 'curly'
              ? "M25 35 Q30 10 50 20 Q70 10 75 35 Q60 15 50 25 Q40 15 25 35"
              : avatar.hairStyle === 'ponytail'
              ? "M25 35 Q50 15 75 35 Q75 25 50 20 Q25 25 25 35 M75 35 Q85 30 82 45"
              : "M25 35 Q50 15 75 35 Q75 25 50 20 Q25 25 25 35"
            }
            fill={avatar.hairColor}
          />
        )}
        
        {/* Eyes */}
        <circle cx="42" cy="38" r="3" fill={avatar.eyeColor} />
        <circle cx="58" cy="38" r="3" fill={avatar.eyeColor} />
        
        {/* Mouth */}
        <path d="M45 48 Q50 52 55 48" stroke={avatar.skinColor} strokeWidth="2" fill="none" />
        
        {/* Body/Outfit */}
        <rect
          x="35"
          y="65"
          width="30"
          height="35"
          rx="15"
          fill={
            avatar.outfit === 'formal' ? '#1F2937' :
            avatar.outfit === 'sporty' ? '#EF4444' :
            avatar.outfit === 'hoodie' ? '#6B7280' :
            avatar.outfit === 'dress' ? '#EC4899' :
            '#3B82F6'
          }
        />
        
        {/* Outfit Details */}
        {avatar.outfit === 'formal' && (
          <rect x="47" y="65" width="6" height="20" fill="#FFFFFF" />
        )}
        {avatar.outfit === 'hoodie' && (
          <circle cx="50" cy="55" r="8" fill={avatar.outfit === 'hoodie' ? '#6B7280' : '#3B82F6'} />
        )}
        
        {/* Accessories */}
        {avatar.accessory === 'glasses' && (
          <g>
            <circle cx="42" cy="38" r="6" fill="none" stroke="#000" strokeWidth="1" />
            <circle cx="58" cy="38" r="6" fill="none" stroke="#000" strokeWidth="1" />
            <line x1="48" y1="38" x2="52" y2="38" stroke="#000" strokeWidth="1" />
          </g>
        )}
        {avatar.accessory === 'hat' && (
          <ellipse cx="50" cy="25" rx="20" ry="8" fill="#DC2626" />
        )}
        {avatar.accessory === 'earrings' && (
          <g>
            <circle cx="37" cy="43" r="2" fill="#FFD700" />
            <circle cx="63" cy="43" r="2" fill="#FFD700" />
          </g>
        )}
        {avatar.accessory === 'necklace' && (
          <ellipse cx="50" cy="58" rx="12" ry="3" fill="none" stroke="#FFD700" strokeWidth="2" />
        )}
      </svg>
    </div>
  );

  const ColorPicker = ({ colors, selected, onChange, icon, title }) => (
    <div className="picker-section" style={{ marginBottom: '20px' }}>
      <div className="picker-label" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        {icon}
        <span style={{ fontWeight: '500' }}>{title}</span>
      </div>
      <div className="picker-options" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onChange(color)}
            className={`color-option ${selected === color ? 'selected' : ''}`}
            style={{ 
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: selected === color ? '3px solid #7c3aed' : '2px solid #e2e8f0',
              backgroundColor: color,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          />
        ))}
      </div>
    </div>
  );

  const OptionPicker = ({ options, selected, onChange, icon, title }) => (
    <div className="picker-section" style={{ marginBottom: '20px' }}>
      <div className="picker-label" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        {icon}
        <span style={{ fontWeight: '500' }}>{title}</span>
      </div>
      <div className="picker-options" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`option-btn ${selected === option ? 'selected' : ''}`}
            style={{
              padding: '8px 12px',
              borderRadius: '8px',
              border: selected === option ? '2px solid #7c3aed' : '1px solid #e2e8f0',
              background: selected === option ? '#f3e8ff' : '#ffffff',
              color: selected === option ? '#7c3aed' : '#6b7280',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: '500',
              textTransform: 'capitalize',
              transition: 'all 0.2s'
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="avatar-customizer">
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <AvatarPreview />
        
        {hasChanges && (
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '12px' }}>
            <button
              onClick={saveChanges}
              className="btn-primary"
              style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '8px 16px' }}
            >
              <Save size={14} />
              Save Changes
            </button>
            <button
              onClick={resetChanges}
              className="btn-light"
              style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '8px 16px' }}
            >
              <RotateCcw size={14} />
              Reset
            </button>
          </div>
        )}
      </div>
      
      <div className="customizer-controls">
        <ColorPicker
          colors={skinColors}
          selected={avatar.skinColor}
          onChange={(color) => handleAvatarChange('skinColor', color)}
          icon={<Palette size={16} color="#FF7F50" />}
          title="Skin Tone"
        />
        
        <ColorPicker
          colors={hairColors}
          selected={avatar.hairColor}
          onChange={(color) => handleAvatarChange('hairColor', color)}
          icon={<Crown size={16} color="#FFD700" />}
          title="Hair Color"
        />
        
        <OptionPicker
          options={hairStyles}
          selected={avatar.hairStyle}
          onChange={(style) => handleAvatarChange('hairStyle', style)}
          icon={<Crown size={16} color="#8A2BE2" />}
          title="Hair Style"
        />
        
        <ColorPicker
          colors={eyeColors}
          selected={avatar.eyeColor}
          onChange={(color) => handleAvatarChange('eyeColor', color)}
          icon={<Eye size={16} color="#2563EB" />}
          title="Eye Color"
        />
        
        <OptionPicker
          options={outfits}
          selected={avatar.outfit}
          onChange={(outfit) => handleAvatarChange('outfit', outfit)}
          icon={<Shirt size={16} color="#10B981" />}
          title="Outfit"
        />
        
        <OptionPicker
          options={accessories}
          selected={avatar.accessory}
          onChange={(accessory) => handleAvatarChange('accessory', accessory)}
          icon={<Crown size={16} color="#EC4899" />}
          title="Accessories"
        />
      </div>
    </div>
  );
}

export default AvatarCustomizer;