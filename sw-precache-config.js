/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

module.exports = {
  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    '/bower_components/webcomponents/webcomponentsjs/webcomponents*.js',
    '/bower_components/webcomponents/webcomponentsjs/custom-elements-es5-adapter.js',
    '/data/locales/**/*.json',
    '/fonts/**/*.*',
    '/images/**/*.*'
  ],

  /* Fallback document, to be served when the requested URL is not in the cache.
     For a single—page app, this is typically the same as the entrypoint. */
  navigateFallback: '/index.html',

  /* Whitelist includes all files except those that end in .html (for HTML imports) and
     ones with /data/ in the path (for dynamically-loaded data). */
  navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/).*/],

  /* Runtime Caching for Dynamic Content
     https://github.com/GoogleChrome/sw-precache/blob/master/GettingStarted.md#runtime-caching-for-dynamic-content */
  runtimeCaching: [{
    /* Google Analytics */
    urlPattern: /https?:\/\/((www|ssl)\.)?google-analytics\.com\/analytics.js/,
    handler: 'networkFirst'
  }, {
    /* Google Fonts
    urlPattern: /https?:\/\/fonts.+/,
    handler: 'cacheFirst'
  }, { */
    /* Examples */
    urlPattern: /^https:\/\/example\.com\/api/,
    handler: 'networkFirst'
  }, {
    urlPattern: /\/data\/images\/.*/,
    handler: 'cacheFirst',
    options: {
      cache: {
        maxEntries: 200,
        name: 'images-cache'
      }
    }
  }, {
    urlPattern: /\/data\/articles\/.*json/,
    handler: 'fastest',
    options: {
      cache: {
        maxEntries: 100,
        name: 'articles-cache'
      }
    }
  }]

};
