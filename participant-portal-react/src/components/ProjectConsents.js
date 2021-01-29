import React from 'react';
import Consent from './Consent';

export default function ProjectConsents(props) {
  const { consents } = props;

  return (
    <div>
      <h1>Consents</h1>
      {consents.map((consent) => (
        <Consent consent={consent} />
      ))}
    </div>
  );
}
