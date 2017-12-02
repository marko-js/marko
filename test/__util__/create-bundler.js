var path = require('path');
var lasso = require('lasso');
var DEFAULT_PLUGINS = [{
  plugin: 'lasso-marko',
  config: { output: 'vdom' }
}];

if (process.env.NYC_CONFIG) {
  DEFAULT_PLUGINS.push(require('./lasso-istanbul-plugin'));
}

module.exports = function (options) {
  return lasso.create({
    outputDir: options.outputDir,
    urlPrefix: './static',
    minify: false,
    bundlingEnabled: false,
    fingerprintsEnabled: false,
    plugins: [{
      plugin: 'lasso-fs-writer',
      config: { fileSystem: options.fs }
    }].concat(DEFAULT_PLUGINS)
  });
}
