"use strict";

exports.__esModule = true;
exports.default = void 0;

var _html = require("marko/src/runtime/html");

var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_componentType = "packages/translator-default/test/fixtures/while-tag/template.marko",
      _marko_template = (0, _html.t)(_marko_componentType);

var _default = _marko_template;
exports.default = _default;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state) {
  let i = 0;
  let _keyValue = 0;

  while (i < 10) {
    const _keyScope = `[${_keyValue++}]`;
    i++;
    out.w("<div></div>");
  }
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);