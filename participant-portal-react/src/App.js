/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import './App.css';
import IdentityProvider from './components/IdentityProvider';
import ProjectConsents from './components/ProjectConsents';

function App() {
  // 0. Modify IdentityProvider configuration for host, realm, and client-id
  // 1. Set up the auth object to match the output of the Identity Provider
  const [auth, setAuth] = useState({
    loggedIn: false,
    keycloak: null,
    user: null,
  });

  // 3 Call keycloak.login() to log into Keycloak
  function login() {
    auth.keycloak.login();
  }

  // 2.1 use useEffect & [] to only invoke the IdP init once
  // 2.2 use an IIAAF (Immediately Invoked Async Arrow Function) to use await without another
  //     function
  // 2.3 call IdentityProvider.init to trigger auth initialization and set to auth
  useEffect(() => {
    (async () => {
      setAuth(await IdentityProvider.init());
    })();
  }, []);

  const consents = [
    {
      project_application_id: 1,
      genetic_consent: true,
      clinical_consent: true,
    },
    {
      project_application_id: 2,
      genetic_consent: false,
      clinical_consent: false,
    },
  ];

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
            <ProjectConsents consents={consents} />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
