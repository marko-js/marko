"use strict";
function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __renderer = __helpers.r,
      _________taglib_hello_renderer_js = __renderer(require("../../../taglib/hello-renderer")),
      __tag = __helpers.t;

  return function render(data, out) {
    __tag(out,
      _________taglib_hello_renderer_js,
      {
        "name": "World"
      });
  };
}
(module.exports = require("marko").c(__filename)).c(create);