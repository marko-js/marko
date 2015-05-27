"use strict";
function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne;

  return function render(data, out) {
    out.w('Hello John &amp; Suzy Invalid Entity: &amp;b ; Valid Numeric Entity: &#34;\nValid Hexadecimal Entity:\n&#x00A2;');
  };
}
(module.exports = require("marko").c(__filename)).c(create);