"use strict";

exports.__esModule = true;
exports.default = void 0;

var _index = require("marko/src/runtime/html/index.js");

var _classValue = _interopRequireDefault(require("marko/src/runtime/helpers/class-value.js"));

var _attr = _interopRequireDefault(require("marko/src/runtime/html/helpers/attr.js"));

var _customTag2 = _interopRequireDefault(require("./components/custom-tag.marko"));

var _renderTag = _interopRequireDefault(require("marko/src/runtime/helpers/render-tag.js"));

var _dynamicTag = _interopRequireDefault(require("marko/src/runtime/helpers/dynamic-tag.js"));

var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_componentType = "packages/translator-default/test/fixtures/attr-class/template.marko",
      _marko_template = (0, _index.t)(_marko_componentType);

var _default = _marko_template;
exports.default = _default;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state) {
  out.w(`<div${(0, _attr.default)("class", (0, _classValue.default)(["a", {
    b: c,
    d
  }]))}></div>`);
  out.w("<div class=\"a b\"></div>");
  out.w("<div class=\"a b c\"></div>");
  (0, _renderTag.default)(_customTag2.default, {
    "class": ["a", {
      b: c,
      d
    }]
  }, out, _componentDef, "3");
  (0, _renderTag.default)(_customTag2.default, {
    "class": ["a", false, "b"]
  }, out, _componentDef, "4");
  (0, _dynamicTag.default)(out, input.test, () => ({
    "class": ["a", {
      b: c,
      d
    }],
    "test": {
      "class": ["a", {
        b: c,
        d
      }],
      "renderBody": out => {
        out.w("Hello");
      }
    }
  }), null, null, null, _componentDef, "5");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);