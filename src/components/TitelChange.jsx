import React, { useState, useEffect } from 'react';

function TitleChanger() {
  const [input, setInput] = useState('');

  useEffect(() => {
    document.title = input
  }, [input]);

  return (
    <div style={{ margin: '20px' }}>
      <h2>Change Document Title</h2>
      <input 
        type="text" 
        placeholder="Type something..." 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        style={{
          padding: '10px',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
      />
    </div>
  );
}

export default TitleChanger;
