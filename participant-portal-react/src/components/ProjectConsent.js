import React from 'react';
import { Table } from 'react-bootstrap';

export default function ProjectConsent(props) {
  const { consent } = props;

  const geneticConsent = consent.genetic_consent ? 'Yes' : 'No';

  const clinicalConsent = consent.clinical_consent ? 'Yes' : 'No';
  return (
    <div>
      <h4>
        Project&nbsp;
        <span>{consent.project_application_id}</span>
        <span>: Consents to sharing data</span>
      </h4>
      <Table striped>
        <tbody>
          <tr>
            <th>Type of Health Data</th>
            <th>
              Share this data with the&nbsp;
              <span>{consent.project_application_id}</span>
              &nbsp;Project
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
  );
}
