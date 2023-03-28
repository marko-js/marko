import { data as _data, closure as _closure, createRenderer as _createRenderer, register as _register, conditional as _conditional, inConditionalScope as _inConditionalScope, value as _value2, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _value$ifBody = /* @__PURE__ */_closure("value", (_scope, value) => _data(_scope["#text/0"], value));
const _ifBody = _register("packages/translator/src/__tests__/fixtures/toggle-first-child/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<span> </span>", /* next(1), get */"D ", null, [_value$ifBody]));
const _if = /* @__PURE__ */_conditional("#text/0");
const _value = /* @__PURE__ */_value2("value", (_scope, value, _dirty) => {
  let _if_value;
  if (_dirty) {
    _if_value = value ? _ifBody : null;
  }
  _if(_scope, _if_value, _dirty);
  _inConditionalScope(_scope, _dirty, _value$ifBody, "#text/0");
});
export const attrs = (_scope, _destructure, _dirty = true) => {
  let value;
  if (_dirty) ({
    value
  } = _destructure);
  _value(_scope, value, _dirty);
};
export { _value as _apply_value };
export const template = "<div><!><span></span><span></span></div>";
export const walks = /* next(1), replace, out(1) */"D%l";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/toggle-first-child/template.marko");