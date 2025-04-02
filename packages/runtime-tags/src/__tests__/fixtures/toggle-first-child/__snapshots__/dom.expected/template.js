export const _template = "<div><!><span></span><span></span></div>";
export const _walks = /* next(1), replace, out(1) */"D%l";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _value$if_content = /* @__PURE__ */_$.conditionalClosure("value", "#text/0", 0, (_scope, value) => _$.data(_scope["#text/0"], value));
const _if_content = /* @__PURE__ */_$.createRenderer("<span> </span>", /* next(1), get */"D ", 0, 0, _scope => _value$if_content._(_scope));
const _if = /* @__PURE__ */_$.conditional("#text/0", _if_content);
export const _value = /* @__PURE__ */_$.value("value", (_scope, value) => {
  _if(_scope, value ? 0 : 1);
  _value$if_content(_scope);
});
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _value(_scope, input.value));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup, _input);