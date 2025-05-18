import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const getMessage = async () => {
    try {
      const response = await fetch('/api/hello');
      const text = await response.text();
      setMessage(text);
    } catch (error) {
      setMessage('Error fetching message');
    }
  };

  return (
    <div className="container">
      <h1>Quarkus + React Demo</h1>
      <button onClick={getMessage}>Get Message from Quarkus</button>
      {message && <div className="response"><strong>Response:</strong> {message}</div>}
    </div>
  );
}

export default App;
