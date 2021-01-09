export const environment = {
  production: true,
  debug: true,
  keycloakDebug: true,
  keycloakOptions: {
    config: {
      url: 'https://digo-oidc.vnptigate.vn/auth',
      realm: 'digo',
      clientId: 'test',
    },
    initOptions: {
      onLoad: 'check-sso'
    }
  },
  routerConfig: {
    enableTracing: false
  },
  defaultRouterLink: 'home',
  insufficientPermissionRouterLink: 'error/insufficient-permission',
  apiProviders: [
    {
      name: 'digo-microservice',
      rootUrl: 'http://localhost:8082/',
      services: [
        { name: 'basedata', path: 'ba' },
        { name: 'fileman', path: 'fi' },
        { name: 'custom', path: 'cu', rootUrl: 'http://localhost:8083/' }
      ]
    }
  ]
};
