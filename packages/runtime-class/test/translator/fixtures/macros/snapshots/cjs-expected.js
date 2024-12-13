"use strict";

exports.__esModule = true;
exports.default = void 0;
var _index = require("marko/src/runtime/html/index.js");
var _escapeXml = require("marko/src/runtime/html/helpers/escape-xml.js");
var _dynamicTag = _interopRequireDefault(require("marko/src/runtime/helpers/dynamic-tag.js"));
var _ofFallback = _interopRequireDefault(require("marko/src/runtime/helpers/of-fallback.js"));
var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const _marko_componentType = "__tests__/template.marko",
  _marko_template = (0, _index.t)(_marko_componentType);
var _default = exports.default = _marko_template;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state, $global) {
  function _renderTree(out, node) {
    out.w("Name: ");
    out.w((0, _escapeXml.x)(node.name));
    out.w(" Children: ");
    if (node.children) {
      out.w("<ul>");
      {
        let _keyValue = 0;
        for (const child of (0, _ofFallback.default)(node.children)) {
          const _keyScope = `[${_keyValue++}]`;
          out.w("<li>");
          (0, _dynamicTag.default)(out, _renderTree, () => child, null, null, null, _componentDef, "3" + _keyScope);
          out.w("</li>");
        }
      }
      out.w("</ul>");
    }
  }
  (0, _dynamicTag.default)(out, _renderTree, () => input.node, null, null, null, _componentDef, "4");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);