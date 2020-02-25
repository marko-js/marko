module.exports = function(input, out) {
  var asyncOut = out.beginAsync();
  asyncOut.write("[async]");
  asyncOut.end();
};
