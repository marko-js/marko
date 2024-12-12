"use strict";

exports.__esModule = true;
exports.default = void 0;
var _index = require("marko/src/runtime/html/index.js");
var _escapeXml = require("marko/src/runtime/html/helpers/escape-xml.js");
var _attrTag = require("marko/src/runtime/helpers/attr-tag.js");
var _renderer = _interopRequireDefault(require("marko/src/core-tags/core/await/renderer.js"));
var _renderTag = _interopRequireDefault(require("marko/src/runtime/helpers/render-tag.js"));
var _renderer2 = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const _marko_componentType = "__tests__/template.marko",
  _marko_template = (0, _index.t)(_marko_componentType);
var _default = exports.default = _marko_template;
const _marko_component = {};
_marko_template._ = (0, _renderer2.default)(function (input, out, _componentDef, _component, state, $global) {
  (0, _renderTag.default)(_renderer.default, (0, _attrTag.i)(() => {
    (0, _attrTag.a)("then", {
      "renderBody": (out, result) => {
        out.w((0, _escapeXml.x)(result));
      }
    });
  }, {
    "_provider": promise,
    "_name": "promise"
  }), out, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);