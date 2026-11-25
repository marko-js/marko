"use strict";

exports.__esModule = true;
var $index = require("marko/src/runtime/html/index.js");
var $escapexml = require("marko/src/runtime/html/helpers/escape-xml.js");
var $dynamictag = $interopDefault(require("marko/src/runtime/helpers/dynamic-tag.js"));
var $offallback = $interopDefault(require("marko/src/runtime/helpers/of-fallback.js"));
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
  function _renderTree(out, node) {
    out.w("Name: ");
    out.w((0, $escapexml.x)(node.name));
    out.w(" Children: ");
    if (node.children) {
      out.w("<ul>");
      {
        let _keyValue = 0;
        for (const child of (0, $offallback.default)(node.children)) {
          const _keyScope = `[${_keyValue++}]`;
          out.w("<li>");
          (0, $dynamictag.default)(out, _renderTree, () => child, null, null, null, _componentDef, "3" + _keyScope);
          out.w("</li>");
        }
      }
      out.w("</ul>");
    }
  }
  (0, $dynamictag.default)(out, _renderTree, () => input.node, null, null, null, _componentDef, "4");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);