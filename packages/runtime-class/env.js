var env = process.env || {};
var NODE_ENV = env.NODE_ENV;
var MARKO_DEBUG = env.MARKO_DEBUG;

exports.isDebug = !(MARKO_DEBUG
  ? MARKO_DEBUG === "false" || MARKO_DEBUG === "0"
  : NODE_ENV && NODE_ENV !== "development");
