/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import './App.css';
import * as Keycloak from 'keycloak-js';
// import Keycloak from './components/IdentityProvider';

function App() {
  const [auth, setAuth] = useState({
    loggedIn: false,
    keycloak: null,
    user: null,
  });

  const init = async () => {
    const initOptions = {
      url: 'http://127.0.0.1:8080/auth',
      realm: 'dycons-participant-idp',
      clientId: 'react-client',
    };

    const tempKeycloak = Keycloak(initOptions);
    const authed = await tempKeycloak.init();
    setAuth({
      ...auth,
      keycloak: tempKeycloak,
      loggedIn: authed,
      user: tempKeycloak.idTokenParsed,
    });
    console.log(`Authed is ${authed}`);
    console.log({ tempKeycloak });
  };

  function login() {
    auth.keycloak.login();
  }

  useEffect(() => {
    console.log('Use effect');
    init();
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
