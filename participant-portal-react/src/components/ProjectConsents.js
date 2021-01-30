import React from 'react';
import { Card, Table } from 'react-bootstrap';
import Consent from './Consent';

export default function ProjectConsents(props) {
  const { consents } = props;

  return (
    <Card body>
      <h1>Consents</h1>
      <Table striped>
        <tbody>
          <tr>
            <th>Project Application ID</th>
            <th>Genetic Consent</th>
            <th>Clinical Consent</th>
          </tr>
          {consents.map((consent) => (
            <Consent consent={consent} />
          ))}
        </tbody>
      </Table>
    </Card>
  );
}
