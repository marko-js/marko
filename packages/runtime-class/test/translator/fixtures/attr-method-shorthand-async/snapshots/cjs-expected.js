"use strict";

exports.__esModule = true;
var $index = require("marko/src/runtime/html/index.js");
var $customtag = $interopDefault(require("./components/custom-tag.marko"));
var $rendertag = $interopDefault(require("marko/src/runtime/helpers/render-tag.js"));
var $renderer = $interopDefault(require("marko/src/runtime/components/renderer.js"));
function $interopDefault(m) {
  return m && m.__esModule ? m : {
    default: m
  };
}
const _marko_componentType = "__tests__/template.marko",
  _marko_template = (0, $index.t)(_marko_componentType);
exports.default = _marko_template;
const _marko_component = {};
_marko_template._ = (0, $renderer.default)(function (input, out, _componentDef, _component, state, $global) {
  (0, $rendertag.default)($customtag.default, {
    "someMethod": async function () {
      await Promise.resolve("hello");
    }
  }, out, _componentDef, "0");
  (0, $rendertag.default)($customtag.default, {
    "value": async function () {
      await Promise.resolve("again");
    }
  }, out, _componentDef, "1");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);