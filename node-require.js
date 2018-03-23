var isDebug = require("./env").isDebug;

if (isDebug) {
    module.exports = require("./src/node-require");
} else {
    module.exports = require("./dist/node-require");
}
