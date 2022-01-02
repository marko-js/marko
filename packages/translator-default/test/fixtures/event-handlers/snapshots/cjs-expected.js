"use strict";

exports.__esModule = true;
exports.default = void 0;

var _index = require("marko/src/runtime/html/index.js");

var _dataMarko = _interopRequireDefault(require("marko/src/runtime/html/helpers/data-marko.js"));

var _customTag2 = _interopRequireDefault(require("./components/custom-tag.marko"));

var _renderTag = _interopRequireDefault(require("marko/src/runtime/helpers/render-tag.js"));

var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_componentType = "packages/translator-default/test/fixtures/event-handlers/template.marko",
      _marko_template = (0, _index.t)(_marko_componentType);

var _default = _marko_template;
exports.default = _default;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state) {
  out.w(`<div${(0, _dataMarko.default)(out, _componentDef, {
    "onclick": _componentDef.d("click", "handleClick", false, [a, b, ...d])
  })}></div>`);
  out.w(`<div${(0, _dataMarko.default)(out, _componentDef, {
    "onDashed-cased-Event": _componentDef.d("Dashed-cased-Event", "handle", false)
  })}></div>`);
  out.w(`<div${(0, _dataMarko.default)(out, _componentDef, {
    "oncamelcasedevent": _componentDef.d("camelcasedevent", "handle", false)
  })} onmouseout=someStringHandler></div>`);
  (0, _renderTag.default)(_customTag2.default, {}, out, _componentDef, "3", [["thing", "handleThing", false, [a, b, ...d]]]);
  (0, _renderTag.default)(_customTag2.default, {}, out, _componentDef, "4", [["Dashed-cased-Event", "handle", false]]);
  (0, _renderTag.default)(_customTag2.default, {}, out, _componentDef, "5", [["camelcasedEvent", "handle", false]]);
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);