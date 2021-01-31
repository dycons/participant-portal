import React from 'react';
import { Card } from 'react-bootstrap';
import ProjectConsent from './ProjectConsent';

export default function ProjectConsents(props) {
  const { consents } = props;

  return (
    <Card body>
      {consents.map((consent) => (
        <ProjectConsent consent={consent} />
      ))}
    </Card>
  );
}
