/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import './App.css';
import IdentityProvider from './components/IdentityProvider';

function App() {
  const [auth, setAuth] = useState({
    loggedIn: false,
    keycloak: null,
    user: null,
  });

  function login() {
    auth.keycloak.login();
  }

  useEffect(() => {
    (async () => {
      setAuth(await IdentityProvider.init());
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {!auth.loggedIn && auth.keycloak && (
          <div role="button" onClick={login} tabIndex="0" onKeyPress={login}>
            Login
          </div>
        )}
        {auth.user && (
          <div>
            <div>Logged in.</div>
            <div>
              Email:
              <span>{auth.user.email}</span>
            </div>
            <div>
              JWT:
              <span>{auth.keycloak.idToken}</span>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
