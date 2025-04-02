export const _template = "<button class=inc> </button>";
export const _walks = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_input_extra_x = /* @__PURE__ */_$.intersection(6, _scope => {
  const {
    input_extra,
    x
  } = _scope;
  _$.tagVarSignal(_scope, x + input_extra);
});
const _x_effect = _$.effect("__tests__/tags/child.marko_0_x", (_scope, {
  x
}) => _$.on(_scope["#button/0"], "click", function () {
  _x(_scope, x + 1), x;
}));
const _x = /* @__PURE__ */_$.state("x/5", (_scope, x) => {
  _$.data(_scope["#text/1"], x);
  _expr_input_extra_x(_scope);
  _x_effect(_scope);
});
export const _input_extra = /* @__PURE__ */_$.value("input_extra", _scope => _expr_input_extra_x(_scope));
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _input_extra(_scope, input.extra));
export function _setup(_scope) {
  _x(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _template, _walks, _setup, _input);