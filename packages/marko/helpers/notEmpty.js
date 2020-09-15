module.exports = require("../env").isDebug
  ? require("../src/legacy-helpers/notEmpty")
  : require("../dist/legacy-helpers/notEmpty");
