var assert = require("assert/strict");

exports.templateData = {};

exports.checkError = function (e) {
  var message = e.message.replace(
    // eslint-disable-next-line no-control-regex
    /([\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><])/g,
    "",
  );
  //includes the tag it broke on
  assert.match(message, /test-hello/);

  //includes the line number of the template
  assert.match(message, /template\.marko:1:2/);
};
