// eslint-disable-next-line no-constant-condition
if ("MARKO_DEBUG") {
  require("complain")("marko-widgets is deprecated. When upgrading to Marko 5 ensure marko-widgets@8 is installed for compatibility.");
}

module.exports = require("@internal/components-entry-legacy");
