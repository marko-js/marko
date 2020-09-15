module.exports = require("../env").isDebug
  ? require("../src/legacy-helpers/empty")
  : require("../dist/legacy-helpers/empty");
