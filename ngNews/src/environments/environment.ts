// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  base_url_topHeadlines: 'https://newsapi.org/v2/top-headlines?apiKey=ec0c09b121044b8c890addd6ed6dec3b',
  base_url_everything: 'https://newsapi.org/v2/everything?apiKey=ec0c09b121044b8c890addd6ed6dec3b',
  base_url_sources: 'https://newsapi.org/v2/sources?apiKey=ec0c09b121044b8c890addd6ed6dec3b',
  base_url: 'http://localhost:5002/api/v1/news'
  /*base_url: 'https://localhost:44320/api/v1/news'*/
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
