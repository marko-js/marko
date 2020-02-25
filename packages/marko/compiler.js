var isDebug = require("./env").isDebug;

if (isDebug) {
  module.exports = require("./src/compiler");
} else {
  module.exports = require("./dist/compiler");
}
