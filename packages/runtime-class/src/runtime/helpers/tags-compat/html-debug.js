const runtimeHtml = require("./runtime-html.js");
exports.s = runtimeHtml.p(require("@marko/runtime-tags/debug/html").compat);
exports.f = runtimeHtml.f;
