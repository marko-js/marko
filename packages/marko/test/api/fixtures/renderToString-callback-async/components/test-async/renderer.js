var promiseProvider = require("../../../../../__util__/async-helpers")
  .promiseProvider;

module.exports = async function(input, out) {
  var asyncOut = out.beginAsync();
  await promiseProvider(1);
  asyncOut.write("[async]");
  asyncOut.end();
};
