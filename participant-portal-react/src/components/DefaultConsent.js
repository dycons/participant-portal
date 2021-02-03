import React from 'react';
import { Card, Table } from 'react-bootstrap';

export default function DefaultConsent(props) {
  const { defaultConsent } = props;

  const geneticConsent = defaultConsent.genetic_consent ? 'Yes' : 'No';

  const clinicalConsent = defaultConsent.clinical_consent ? 'Yes' : 'No';
  return (
    <Card body>
      <div>
        <h2>Default consents to sharing data with new projects</h2>
        <Table striped>
          <tbody>
            <tr>
              <th>Type of Health Data</th>
              <th>
                Automatically share this data with newly approved Projects?
              </th>
            </tr>
            <tr>
              <th>Clinical</th>
              <td>{clinicalConsent}</td>
            </tr>
            <tr>
              <th>Genetic</th>
              <td>{geneticConsent}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Card>
  );
}
