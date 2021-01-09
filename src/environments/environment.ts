// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
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
    },
    enableBearerInterceptor: false,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
