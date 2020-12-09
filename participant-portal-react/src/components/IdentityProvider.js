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

export default idp;
