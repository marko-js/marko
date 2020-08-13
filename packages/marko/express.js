// TODO: Should deprecate and extract into @marko/express

var isDebug = require("./env").isDebug;
var target = isDebug ? "marko/src/express" : "marko/dist/express";
isDebug &&
  require("complain").log(
    "marko/express has moved into it's own module, install @marko/express instead."
  );

module.exports = module.parent
  ? module.parent.require(target)
  : require(target);
