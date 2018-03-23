var isDebug = require("./env").isDebug;

if (isDebug) {
    module.exports = require("./src/components");
} else {
    module.exports = require("./dist/components");
}
