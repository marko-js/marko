"use strict";

exports.__esModule = true;
exports.y = exports.x = exports.default = void 0;
exports.z = z;
var _index = require("marko/src/runtime/html/index.js");
var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const _marko_componentType = "packages/translator-default/test/fixtures/exports/template.marko",
  _marko_template = (0, _index.t)(_marko_componentType);
var _default = _marko_template;
exports.default = _default;
const x = 1;
exports.x = x;
const y = 2;
exports.y = y;
function z() {}
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state, $global) {}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);