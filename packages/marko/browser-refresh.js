// TODO: Should deprecate and extract into @marko/browser-refresh

var isDebug = require("./env").isDebug;

if (isDebug) {
  module.exports = require("./src/browser-refresh");
} else {
  module.exports = require("./dist/browser-refresh");
}
