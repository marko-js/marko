const runtimeHtml = require("./runtime-html.js");
exports.s = runtimeHtml.p(
  require("@marko/runtime-tags/html/compat.feat").compat,
);
exports.f = runtimeHtml.f;
