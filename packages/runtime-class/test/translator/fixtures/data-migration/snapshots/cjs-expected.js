"use strict";

exports.__esModule = true;
exports.default = void 0;
var _index = require("marko/src/runtime/html/index.js");
var _escapeXml = require("marko/src/runtime/html/helpers/escape-xml.js");
var _test2 = _interopRequireDefault(require("./test.marko"));
var _renderTag = _interopRequireDefault(require("marko/src/runtime/helpers/render-tag.js"));
var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const _marko_componentType = "__tests__/template.marko",
  _marko_template = (0, _index.t)(_marko_componentType);
var _default = exports.default = _marko_template;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state, $global) {
  (0, _renderTag.default)(_test2.default, {
    "class": input.class,
    "renderBody": (out, data) => {
      out.w("Hello ");
      out.w((0, _escapeXml.x)(data.name));
    }
  }, out, _componentDef, "0");
  out.w("<div>");
  out.w("Hello ");
  out.w((0, _escapeXml.x)(input.name));
  out.w("<span>");
  () => {
    data;
    const data = "foo";
    console.log(data);
  };
  out.w("Hello ");
  out.w((0, _escapeXml.x)(input));
  out.w("</span>");
  if (true) {
    const data = "bar";
    out.w("Hello ");
    out.w((0, _escapeXml.x)(data));
  }
  out.w("</div>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);