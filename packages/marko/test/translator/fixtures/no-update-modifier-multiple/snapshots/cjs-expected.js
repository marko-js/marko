"use strict";

exports.__esModule = true;
exports.default = void 0;
var _index = require("marko/src/runtime/html/index.js");
var _dataMarko = _interopRequireDefault(require("marko/src/runtime/html/helpers/data-marko.js"));
var _attr = _interopRequireDefault(require("marko/src/runtime/html/helpers/attr.js"));
var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const _marko_componentType = "__tests__/template.marko",
  _marko_template = (0, _index.t)(_marko_componentType);
var _default = exports.default = _marko_template;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state, $global) {
  out.w("<div>");
  out.w(`<input${(0, _dataMarko.default)(out, _componentDef, {
    pa: {
      value: 1
    }
  })}${(0, _attr.default)("value", input.defaultValue)}>`);
  out.w(`<input${(0, _dataMarko.default)(out, _componentDef, {
    pa: {
      value: 1,
      checked: 1
    }
  })} type=checkbox${(0, _attr.default)("value", input.defaultValue)}${(0, _attr.default)("checked", input.checked)}>`);
  out.w("</div>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);