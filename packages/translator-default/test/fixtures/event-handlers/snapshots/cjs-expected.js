"use strict";

exports.__esModule = true;
exports.default = void 0;

var _dataMarko = _interopRequireDefault(require("marko/src/runtime/html/helpers/data-marko"));

var _customTag2 = _interopRequireDefault(require("./components/custom-tag.marko"));

var _renderTag = _interopRequireDefault(require("marko/src/runtime/helpers/render-tag"));

var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer"));

var _html = require("marko/src/runtime/html");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_template = (0, _html.t)();

var _default = _marko_template;
exports.default = _default;
const _marko_componentType = "packages/translator-default/test/fixtures/event-handlers/template.marko",
      _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _component, component, state) {
  out.w(`<div${(0, _dataMarko.default)(out, _component, {
    "onclick": _component.d("click", "handleClick", false, [a, b, ...d])
  })}></div>`);
  out.w(`<div${(0, _dataMarko.default)(out, _component, {
    "onDashed-cased-Event": _component.d("Dashed-cased-Event", "handle", false)
  })}></div>`);
  out.w(`<div${(0, _dataMarko.default)(out, _component, {
    "oncamelcasedevent": _component.d("camelcasedevent", "handle", false)
  })} onmouseout=someStringHandler></div>`);
  (0, _renderTag.default)(_customTag2.default, {}, out, _component, "3", [["thing", "handleThing", false, [a, b, ...d]]]);
  (0, _renderTag.default)(_customTag2.default, {}, out, _component, "4", [["Dashed-cased-Event", "handle", false]]);
  (0, _renderTag.default)(_customTag2.default, {}, out, _component, "5", [["camelcasedEvent", "handle", false]]);
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);