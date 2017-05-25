var isDebug = require('./env').isDebug;
var parentModule = module.parent;

if (isDebug) {
    module.exports = parentModule.require('marko/src/express');
} else {
    module.exports = parentModule.require('marko/dist/express');
}
