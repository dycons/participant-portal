/* eslint-disable no-console */
import React, { useEffect } from 'react';
import './App.css';
import * as Keycloak from 'keycloak-js';
// import Keycloak from './components/IdentityProvider';

function App() {
  let keycloak = null;

  const init = async () => {
    const initOptions = {
      url: 'http://127.0.0.1:8080/auth',
      realm: 'dycons',
      clientId: 'react-client',
    };

    keycloak = Keycloak(initOptions);
    keycloak.init();
  };

  function login() {
    keycloak.login();
  }

  useEffect(() => {
    init();
  });

  return (
    <div className="App">
      <header className="App-header">
        <div role="button" onClick={login} tabIndex="0" onKeyPress={login}>
          Login
        </div>
      </header>
    </div>
  );
}

export default App;
