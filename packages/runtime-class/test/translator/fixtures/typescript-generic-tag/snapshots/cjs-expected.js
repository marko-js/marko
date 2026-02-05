"use strict";

exports.__esModule = true;
exports.default = void 0;
var _index = require("marko/src/runtime/html/index.js");
var _typeArg2 = _interopRequireDefault(require("./components/type-arg.marko"));
var _renderTag = _interopRequireDefault(require("marko/src/runtime/helpers/render-tag.js"));
var _escapeXml = require("marko/src/runtime/html/helpers/escape-xml.js");
var _typeParam2 = _interopRequireDefault(require("./components/type-param.marko"));
var _typeArgAndParam2 = _interopRequireDefault(require("./components/type-arg-and-param.marko"));
var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));
function _interopRequireDefault(e) { return (e && e.__esModule ? e : { default: e }); }
const _marko_componentType = "__tests__/template.marko",
  _marko_template = (0, _index.t)(_marko_componentType);
var _default = exports.default = _marko_template;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state, $global) {
  (0, _renderTag.default)(_typeArg2.default, {}, out, _componentDef, "0");
  (0, _renderTag.default)(_typeParam2.default, {
    "renderBody": (out, x) => {
      out.w((0, _escapeXml.x)(x));
    }
  }, out, _componentDef, "1");
  (0, _renderTag.default)(_typeArgAndParam2.default, {
    "arg": "hello",
    "renderBody": (out, x) => {
      out.w((0, _escapeXml.x)(x));
    }
  }, out, _componentDef, "2");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);