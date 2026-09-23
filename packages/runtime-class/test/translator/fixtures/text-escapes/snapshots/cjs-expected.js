"use strict";

exports.__esModule = true;
exports.default = void 0;
var _index = require("marko/src/runtime/html/index.js");
var _escapeXml = require("marko/src/runtime/html/helpers/escape-xml.js");
var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const _marko_componentType = "__tests__/template.marko",
  _marko_template = (0, _index.t)(_marko_componentType);
var _default = exports.default = _marko_template;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state, $global) {
  out.w("<p>");
  out.w("A literal ");
  out.w("${placeholder} and a live ");
  out.w((0, _escapeXml.x)(input.name));
  out.w("</p>");
  out.w("<p>");
  out.w("A slash before a placeholder\\");
  out.w((0, _escapeXml.x)(input.name));
  out.w("</p>");
  out.w("<p>");
  out.w("A slash and literal ");
  out.w("\\${text}");
  out.w("</p>");
  out.w("<p>");
  out.w("A path C:\\Users\\dev");
  out.w("</p>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);