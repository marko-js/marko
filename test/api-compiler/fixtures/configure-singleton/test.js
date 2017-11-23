exports.check = function (marko, markoCompiler, expect, helpers, done) {

    var configModulePath = require.resolve('marko/compiler/config');
    var config = require(configModulePath);

    var globalConfig = global.__MARKO_CONFIG;
    expect(config).to.equal(globalConfig);

    delete require.cache[configModulePath];

    config = require(configModulePath);
    expect(config).to.equal(globalConfig);

    done();
};