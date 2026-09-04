"use strict";

exports.__esModule = true;
exports.default = void 0;
var _index = require("marko/src/runtime/html/index.js");
var _index2 = _interopRequireDefault(require("./components/child/index.marko"));
var _renderTag = _interopRequireDefault(require("marko/src/runtime/helpers/render-tag.js"));
var _dataMarko = _interopRequireDefault(require("marko/src/runtime/html/helpers/data-marko.js"));
var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));
var _skipSerialize = _interopRequireDefault(require("marko/src/runtime/helpers/skip-serialize.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const _marko_componentType = "__tests__/template.marko",
  _marko_template = (0, _index.t)(_marko_componentType);
var _default = exports.default = _marko_template;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (_input, out, _componentDef, _component, state, $global) {
  const input = (0, _skipSerialize.default)(_input);
  out.w(`<button${(0, _dataMarko.default)(out, _componentDef, {
    "onclick": _componentDef.d("click", "emit", false, ["click"])
  })}>`);
  (0, _renderTag.default)(_index2.default, {}, out, _componentDef, "1");
  out.w("</button>");
}, {
  t: _marko_componentType,
  s: true,
  d: true
}, _marko_component);