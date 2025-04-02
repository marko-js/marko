export const _template = "<div></div>";
export const _walks = /* get, over(1) */" b";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _input_value$if_content = /* @__PURE__ */_$.conditionalClosure("input_value", "#div/0", 0, (_scope, input_value) => _$.data(_scope["#text/0"], input_value));
const _if_content = /* @__PURE__ */_$.createRenderer("<span> </span>", /* next(1), get */"D ", 0, 0, _scope => _input_value$if_content._(_scope));
const _if = /* @__PURE__ */_$.conditional("#div/0", _if_content);
export const _input_value = /* @__PURE__ */_$.value("input_value", (_scope, input_value) => {
  _if(_scope, input_value ? 0 : 1);
  _input_value$if_content(_scope);
});
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _input_value(_scope, input.value));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup, _input);