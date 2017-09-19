var isDebug = require('./env').isDebug;
var parentModule = module.parent;
var parentRequire = parentModule && parentModule.require || require;

if (isDebug) {
    module.exports = parentRequire('marko/src/express');
} else {
    module.exports = parentRequire('marko/dist/express');
}
