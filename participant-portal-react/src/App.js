import React from 'react';
import './App.css';

function App() {
  function loginClicked() {
    // eslint-disable-next-line no-console
    console.log('login clicked');
  }

  return (
    <div className="App">
      <header className="App-header">
        <div
          role="button"
          onClick={loginClicked}
          tabIndex="0"
          onKeyPress={loginClicked}
        >
          Login
        </div>
      </header>
    </div>
  );
}

export default App;
