var JSDOM = require('jsdom-global');

module.exports = exports = function (options) {
  exports.cleanup = JSDOM(options.html, {
    url: options.url,
    resourceLoader: options.resolve,
    features: { FetchExternalResources: ["script", "iframe", "link"] }
  });

  // Expose current instance of mocha to jsdom.
  [
    'describe',
    'before',
    'after',
    'beforeEach',
    'afterEach',
    'it',
    '__coverage__'
  ].forEach(function (k) {  window[k] = global[k]; });

  return new Promise(function (resolve, reject) {
    window.addEventListener('error', function (ev) {
      reject(ev.error);
    });

    window.addEventListener('load', function () {
      resolve();
    });
  });
}
