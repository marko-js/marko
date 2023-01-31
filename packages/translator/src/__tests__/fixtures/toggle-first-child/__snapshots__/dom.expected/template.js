import { data as _data, inConditionalScope as _inConditionalScope, closure as _closure, createRenderer as _createRenderer, register as _register, conditional as _conditional, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _value$ifBody = /* @__PURE__ */_closure(1, "value", [], (_scope, value) => _data(_scope["#text/0"], value));
const _ifBody = _register("packages/translator/src/__tests__/fixtures/toggle-first-child/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<span> </span>", /* next(1), get */"D ", null, [_value$ifBody]));
const _if = /* @__PURE__ */_conditional("#text/0", 1, (_scope, value = _scope["value"]) => value ? _ifBody : null);
const _value = /* @__PURE__ */_source("value", [_if, /* @__PURE__ */_inConditionalScope(_value$ifBody, "#text/0")]);
export const attrs = /* @__PURE__ */_destructureSources([_value], (_scope, {
  value
}) => {
  _setSource(_scope, _value, value);
});
export { _value as _apply_value };
export const template = "<div><!><span></span><span></span></div>";
export const walks = /* next(1), replace, out(1) */"D%l";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/toggle-first-child/template.marko");