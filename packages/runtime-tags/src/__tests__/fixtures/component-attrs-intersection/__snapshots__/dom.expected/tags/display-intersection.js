export const _template = "<div> </div>";
export const _walks = /* next(1), get, out(1) */"D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_value_dummy = /* @__PURE__ */_$.intersection(5, _scope => {
  const {
    value,
    dummy
  } = _scope;
  _$.data(_scope["#text/0"], (dummy, value));
});
const _dummy = /* @__PURE__ */_$.state("dummy/4", _scope => _expr_value_dummy(_scope));
export const _value = /* @__PURE__ */_$.value("value", _scope => _expr_value_dummy(_scope));
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _value(_scope, input.value));
export function _setup(_scope) {
  _dummy(_scope, {});
}
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/display-intersection.marko", _template, _walks, _setup, _input);