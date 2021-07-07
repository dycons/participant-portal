import * as Keycloak from 'keycloak-js';

const initOptions = {
  url: 'http://127.0.0.1:8080/auth',
  realm: 'dycons-participant-idp',
  clientId: 'react-client',
};

const idp = {};

idp.init = async () => {
  const keycloak = Keycloak(initOptions);
  const loggedIn = await keycloak.init({ onLoad: 'check-sso' });
  return {
    keycloak,
    loggedIn,
    user: keycloak.idTokenParsed,
  };
};

idp.getConsents = async (auth) => {
  // TODO: Build bearer token from jwt in auth object
  // eslint-disable-next-line max-len
  // eslint-disable-next-line operator-linebreak
  const bearer =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1pYyBGb2siLCJyb2xlIjoicmVzZWFyY2gtcGFydGljaXBhbnQiLCJhZG1pbl9pZCI6IjEiLCJpYXQiOjE1MTYyMzkwMjIsImp0aSI6IjNkMzUwZjU5LTliYTUtNDU4OS1hNTgxLTg5NjI5YWQ2NmU1NyIsImV4cCI6MTYxMzA5NDkxNX0.5iT-x_PLbHgYg7pA4HhBNtiEE41_4teOYY3NwnRCsAw';

  const myHeaders = new Headers();
  myHeaders.append('Authorization', bearer);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  const host = process.env.REACT_APP_RELAY_HOST;

  let consents = {
    projectConsents: [],
    defaultConsent: {},
  };
  await fetch(`${host}/consents`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      consents = {
        projectConsents: result.project_consents,
        defaultConsent: result.default_consent,
      };
    })
    .catch((error) => alert(`Unable to fetch consents: ${error}`));

  return consents;
};

export default idp;
