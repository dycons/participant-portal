import React from 'react';

export default function Consent(props) {
  const { consent } = props;
  return (
    <div>
      <div>
        Project&nbsp;
        <span>{consent.project_application_id}</span>
      </div>
      <div>{consent.genetic_consent ? 'Consent' : 'Does not consent'}</div>
      <div>{consent.clinical_consent ? 'Consent' : 'Does not consent'}</div>
    </div>
  );
}
