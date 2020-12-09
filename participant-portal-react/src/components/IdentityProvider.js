import * as Keycloak from 'keycloak-js';

const initOptions = {
  url: 'http://127.0.0.1:8080/auth',
  realm: 'dycons',
  clientId: 'sample-vue-client',
};

const keycloak = Keycloak(initOptions);

export default keycloak;
