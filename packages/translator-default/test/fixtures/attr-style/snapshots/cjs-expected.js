"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styleValue = _interopRequireDefault(require("marko/src/runtime/helpers/style-value"));

var _attr = _interopRequireDefault(require("marko/src/runtime/html/helpers/attr"));

var _customTag2 = _interopRequireDefault(require("./components/custom-tag.marko"));

var _renderTag = _interopRequireDefault(require("marko/src/runtime/helpers/render-tag"));

var _dynamicTag = _interopRequireDefault(require("marko/src/runtime/helpers/dynamic-tag"));

var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer"));

var _html = require("marko/src/runtime/html");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_template = (0, _html.t)(__filename);

var _default = _marko_template;
exports.default = _default;
const _marko_componentType = "packages/translator-default/test/fixtures/attr-style/template.marko",
      _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _component, component, state) {
  out.w(`<div${(0, _attr.default)("style", (0, _styleValue.default)({
    color: input.color
  }))}></div>`);
  out.w("<div style=width:100px;></div>");
  out.w("<div style=\"color: green\"></div>");
  (0, _renderTag.default)(_customTag2.default, {
    "style": {
      color: input.color
    }
  }, out, _component, "3");
  (0, _renderTag.default)(_customTag2.default, {
    "style": {
      width: 100
    }
  }, out, _component, "4");
  (0, _renderTag.default)(_customTag2.default, {
    "style": "color: green"
  }, out, _component, "5");
  (0, _dynamicTag.default)(out, input.test, () => ({
    "style": {
      color: "green"
    },
    "test": {
      "style": {
        color: "green"
      },
      "renderBody": out => {
        out.w("Hello");
      }
    }
  }), null, null, null, _component, "6");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);