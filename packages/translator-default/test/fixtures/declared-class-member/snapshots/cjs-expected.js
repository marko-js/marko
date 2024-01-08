"use strict";

exports.__esModule = true;
exports.default = void 0;
var _index = require("marko/src/runtime/html/index.js");
var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const _marko_componentType = "packages/translator-default/test/fixtures/declared-class-member/template.marko",
  _marko_template = (0, _index.t)(_marko_componentType);
var _default = exports.default = _marko_template;
class MyClass {
  y = 2;
}
const _marko_component = {
  onCreate() {
    this.y = 2
  }
};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state, $global) {}, {
  t: _marko_componentType,
  d: true
}, _marko_component);