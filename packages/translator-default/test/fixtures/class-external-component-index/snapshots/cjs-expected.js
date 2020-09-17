"use strict";

exports.__esModule = true;
exports.default = void 0;

var _component2 = _interopRequireDefault(require("./component.js"));

var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer"));

var _html = require("marko/src/runtime/html");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_template = (0, _html.t)();

var _default = _marko_template;
exports.default = _default;
const _marko_componentType = "packages/translator-default/test/fixtures/class-external-component-index/index.marko",
      _marko_component2 = _component2.default;
_marko_template._ = (0, _renderer.default)(function (input, out, _component, component, state) {
  out.w("<div></div>");
}, {
  t: _marko_componentType
}, _marko_component2);