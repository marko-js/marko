"use strict";

exports.__esModule = true;
exports.default = void 0;

var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer"));

var _html = require("marko/src/runtime/html");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_template = (0, _html.t)(__filename);

var _default = _marko_template;
exports.default = _default;
const _marko_componentType = "packages/translator-default/test/fixtures/declaration/template.marko",
      _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _component, component, state) {
  out.w("<?xml version=\"1.0\" encoding=\"utf-8\"?>");
  out.w("<contact-info>");
  out.w("<name>");
  out.w("Hello World");
  out.w("</name>");
  out.w("</contact-info>");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);