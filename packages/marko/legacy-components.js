var isDebug = require("./env").isDebug;

if (isDebug) {
  module.exports = require("./src/runtime/components/legacy");
} else {
  module.exports = require("./dist/runtime/components/legacy");
}
