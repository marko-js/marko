"use strict";

exports.__esModule = true;
exports.default = void 0;

var _html = require("marko/src/runtime/html");

var _classValue = _interopRequireDefault(require("marko/src/runtime/helpers/class-value"));

var _attr = _interopRequireDefault(require("marko/src/runtime/html/helpers/attr"));

var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_template = (0, _html.t)();

var _default = _marko_template;
exports.default = _default;
const _marko_componentType = "packages/translator-default/test/fixtures/shorthand-classname/template.marko",
      _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _component, component, state) {
  out.w("<div class=shorthand></div>");
  out.w("<div class=\"shorthand1 shorthand2\"></div>");
  out.w("<div class=\"shorthand1 shorthand2 inline\"></div>");
  out.w(`<div${(0, _attr.default)("class", (0, _classValue.default)(["shorthand1 shorthand2", dynamic1]))}></div>`);
  out.w(`<div${(0, _attr.default)("class", (0, _classValue.default)([dynamic1, "inline"]))}></div>`);
  out.w(`<div${(0, _attr.default)("class", (0, _classValue.default)([dynamic1, "shorthand2", "inline"]))}></div>`);
  out.w(`<div${(0, _attr.default)("class", (0, _classValue.default)([dynamic1, "shorthand2", dynamic2]))}></div>`);
  out.w(`<div${(0, _attr.default)("class", (0, _classValue.default)([dynamic2, dynamic3, dynamic1, "shorthand2"]))}></div>`);
  out.w(`<div${(0, _attr.default)("class", (0, _classValue.default)([dynamic1, dynamic2, "shorthand"]))}></div>`);
  out.w(`<div${(0, _attr.default)("class", (0, _classValue.default)(["partially-" + dynamic1, "shorthand2", dynamic2]))}></div>`);
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);