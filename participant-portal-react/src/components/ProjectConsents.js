import React from 'react';

export default function ProjectConsents(props) {
  const { consents } = props;

  return (
    <div>
      <h1>Consents</h1>
      {consents.map((consent) => (
        <div>
          <div>
            Project&nbsp;
            <span>{consent.project_application_id}</span>
          </div>
          <div>{consent.genetic_consent ? 'Consent' : 'Does not consent'}</div>
          <div>{consent.clinical_consent ? 'Consent' : 'Does not consent'}</div>
        </div>
      ))}
    </div>
  );
}
