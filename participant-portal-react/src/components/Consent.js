import React from 'react';

export default function Consent(props) {
  const { consent } = props;

  const geneticConsent = consent.genetic_consent
    ? 'Consent'
    : 'Does not consent';

  const clinicalConsent = consent.clinical_consent
    ? 'Consent'
    : 'Does not consent';
  return (
    <tr>
      <td>{consent.project_application_id}</td>
      <td>{geneticConsent}</td>
      <td>{clinicalConsent}</td>
    </tr>
  );
}
