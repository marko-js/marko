"use strict";

exports.__esModule = true;
exports.default = void 0;

var _html = require("marko/src/runtime/html");

var _dataMarko = _interopRequireDefault(require("marko/src/runtime/html/helpers/data-marko"));

var _attr = _interopRequireDefault(require("marko/src/runtime/html/helpers/attr"));

var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_componentType = "packages/translator-default/test/fixtures/no-update-modifier-multiple/template.marko",
      _marko_template = (0, _html.t)(_marko_componentType);

var _default = _marko_template;
exports.default = _default;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state) {
  out.w("<div>");
  out.w(`<input${(0, _dataMarko.default)(out, _componentDef, {
    pa: ["value"]
  })}${(0, _attr.default)("value", input.defaultValue)}>`);
  out.w(`<input${(0, _dataMarko.default)(out, _componentDef, {
    pa: ["value", "checked"]
  })} type=checkbox${(0, _attr.default)("value", input.defaultValue)}${(0, _attr.default)("checked", input.checked)}>`);
  out.w("</div>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);