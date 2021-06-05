import React from 'react';
import { Card } from 'react-bootstrap';
import ProjectConsent from './ProjectConsent';

export default function ProjectConsents(props) {
  const { consents } = props;

  return (
    <Card body>
      <div>
        <h2>Project Consents</h2>
      </div>
      {consents.map((consent) => (
        <ProjectConsent
          key={consent.project_application_id}
          consent={consent}
        />
      ))}
    </Card>
  );
}
