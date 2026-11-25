"use strict";

exports.__esModule = true;
var $index = require("marko/src/runtime/html/index.js");
var $datamarko = $interopDefault(require("marko/src/runtime/html/helpers/data-marko.js"));
var $customtag = $interopDefault(require("./components/custom-tag.marko"));
var $rendertag = $interopDefault(require("marko/src/runtime/helpers/render-tag.js"));
var $renderer = $interopDefault(require("marko/src/runtime/components/renderer.js"));
var $skipserialize = $interopDefault(require("marko/src/runtime/helpers/skip-serialize.js"));
function $interopDefault(m) {
  return m && m.__esModule ? m : {
    default: m
  };
}
const _marko_componentType = "__tests__/template.marko",
  _marko_template = (0, $index.t)(_marko_componentType);
exports.default = _marko_template;
const _marko_component = {};
_marko_template._ = (0, $renderer.default)(function (_input, out, _componentDef, _component, state, $global) {
  const input = (0, $skipserialize.default)(_input);
  out.w(`<div${(0, $datamarko.default)(out, _componentDef, {
    "onclick": _componentDef.d("click", "handleClick", false, [a, b, ...d])
  })}></div>`);
  out.w(`<div${(0, $datamarko.default)(out, _componentDef, {
    "onDashed-cased-Event": _componentDef.d("Dashed-cased-Event", "handle", false)
  })}></div>`);
  out.w(`<div${(0, $datamarko.default)(out, _componentDef, {
    "oncamelcasedevent": _componentDef.d("camelcasedevent", "handle", false)
  })} onmouseout=someStringHandler></div>`);
  (0, $rendertag.default)($customtag.default, {}, out, _componentDef, "3", [["thing", "handleThing", false, [a, b, ...d]]]);
  (0, $rendertag.default)($customtag.default, {}, out, _componentDef, "4", [["Dashed-cased-Event", "handle", false]]);
  (0, $rendertag.default)($customtag.default, {}, out, _componentDef, "5", [["camelcasedEvent", "handle", false]]);
}, {
  t: _marko_componentType,
  s: true,
  d: true
}, _marko_component);