const domCompat = require("@marko/runtime-tags/debug/dom").compat;
const runtimeDom = require("./runtime-dom.js");

runtimeDom.p(domCompat);
exports.f = (id, factory) => runtimeDom.f(domCompat, id, factory);
