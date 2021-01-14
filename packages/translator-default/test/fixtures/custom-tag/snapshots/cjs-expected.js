"use strict";

exports.__esModule = true;
exports.default = void 0;

var _renderer = _interopRequireDefault(require("./tags/test-hello/renderer.js"));

var _renderTag = _interopRequireDefault(require("marko/src/runtime/helpers/render-tag"));

var _renderer2 = _interopRequireDefault(require("marko/src/runtime/components/renderer"));

var _html = require("marko/src/runtime/html");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_template = (0, _html.t)();

var _default = _marko_template;
exports.default = _default;
const _marko_componentType = "packages/translator-default/test/fixtures/custom-tag/template.marko",
      _marko_component = {};
_marko_template._ = (0, _renderer2.default)(function (input, out, _component, component, state) {
  (0, _renderTag.default)(_renderer.default, {
    "name": "World"
  }, out, _component, "0");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);