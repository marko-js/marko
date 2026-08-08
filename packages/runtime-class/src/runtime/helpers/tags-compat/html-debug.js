const htmlCompat = require("@marko/runtime-tags/debug/html").compat;

exports.s = require("./runtime-html.js").p(htmlCompat);
exports.f = (id, fn, component, out) =>
  htmlCompat.registerClassFunction(out.global, id, fn, component.id);
