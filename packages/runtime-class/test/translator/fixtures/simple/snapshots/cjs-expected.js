"use strict";

exports.__esModule = true;
exports.default = void 0;
var _index = require("marko/src/runtime/html/index.js");
var _escapeXml = require("marko/src/runtime/html/helpers/escape-xml.js");
var _ofFallback = _interopRequireDefault(require("marko/src/runtime/helpers/of-fallback.js"));
var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));
function _interopRequireDefault(e) { return (e && e.__esModule ? e : { default: e }); }
const _marko_componentType = "__tests__/template.marko",
  _marko_template = (0, _index.t)(_marko_componentType);
var _default = exports.default = _marko_template;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state, $global) {
  out.w("Hello ");
  out.w((0, _escapeXml.x)(input.name));
  out.w("! ");
  if (input.colors.length) {
    out.w("<ul>");
    {
      let _keyValue = 0;
      for (const color of (0, _ofFallback.default)(input.colors)) {
        const _keyScope = `[${_keyValue++}]`;
        out.w("<li>");
        out.w((0, _escapeXml.x)(color));
        out.w("</li>");
      }
    }
    out.w("</ul>");
  } else {
    out.w("<div>");
    out.w("No colors!");
    out.w("</div>");
  }
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);