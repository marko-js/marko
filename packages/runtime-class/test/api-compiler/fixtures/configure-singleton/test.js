const assert = require("assert/strict");

exports.check = function (marko, markoCompiler, helpers, done) {
  var configModulePath = require.resolve("marko/src/compiler/config");
  var config = require(configModulePath);

  var globalConfig = global.__MARKO_CONFIG;
  assert.equal(config, globalConfig);

  delete require.cache[configModulePath];

  config = require(configModulePath);
  assert.equal(config, globalConfig);

  done();
};
