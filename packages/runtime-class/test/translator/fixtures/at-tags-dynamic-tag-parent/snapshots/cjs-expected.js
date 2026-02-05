"use strict";

exports.__esModule = true;
exports.default = void 0;
var _index = require("marko/src/runtime/html/index.js");
var _attrTag = require("marko/src/runtime/helpers/attr-tag.js");
var _dynamicTag = _interopRequireDefault(require("marko/src/runtime/helpers/dynamic-tag.js"));
var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));
function _interopRequireDefault(e) { return (e && e.__esModule ? e : { default: e }); }
const _marko_componentType = "__tests__/template.marko",
  _marko_template = (0, _index.t)(_marko_componentType);
var _default = exports.default = _marko_template;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state, $global) {
  (0, _dynamicTag.default)(out, input.x, () => (0, _attrTag.i)(() => {
    (0, _attrTag.a)("header", {
      "class": "my-header",
      "renderBody": out => {
        out.w("Header content");
      }
    });
    (0, _attrTag.a)("footer", {
      "class": "my-footer",
      "renderBody": out => {
        out.w("Footer content");
      }
    });
    return (out => {
      out.w("Body content");
    });
  }), null, null, null, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);