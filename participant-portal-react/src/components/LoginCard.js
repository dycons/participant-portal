import React from 'react';

import { Card, Table, Button } from 'react-bootstrap';

export default function LoginCard(props) {
  const { auth, login } = props;
  return (
    <Card body className="login card">
      {!auth.loggedIn && auth.keycloak && (
        <Button
          variant="outline-primary"
          as="div"
          onClick={login}
          onKeyPress={login}
          size="lg"
        >
          Login to Participant IdP
        </Button>
      )}
      {auth.user && (
        <Table striped>
          <tbody>
            <tr>
              <th>Email:</th>
              <td>{auth.user.email}</td>
            </tr>
            <tr>
              <th>JWT:</th>
              <td>{auth.keycloak.idToken}</td>
            </tr>
          </tbody>
        </Table>
      )}
    </Card>
  );
}
