var isDebug = require("./env").isDebug;
var target = isDebug ? "marko/src/express" : "marko/dist/express";

module.exports = module.parent
    ? module.parent.require(target)
    : require(target);
