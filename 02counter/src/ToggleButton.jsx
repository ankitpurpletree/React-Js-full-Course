import React from 'react';

const ToggleButton = ({ isOn, handleToggle }) => {
  return (
    <button onClick={handleToggle} className={`toggle-button ${isOn ? 'on' : 'off'}`}>
      {isOn ? '💡' : '🔅'}
    </button>
  );
};

export default ToggleButton;
