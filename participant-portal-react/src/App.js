/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

/* eslint-disable object-curly-newline */
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';

import './App.css';
import IdentityProvider from './components/IdentityProvider';
import LoginCard from './components/LoginCard';

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

  return (
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Dycons - Participant Portal</h1>
      </Jumbotron>
      <Row>
        <Col>
          <LoginCard auth={auth} login={login} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
