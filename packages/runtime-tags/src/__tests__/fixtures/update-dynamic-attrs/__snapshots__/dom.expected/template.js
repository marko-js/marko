export const _template_ = "<div></div><div></div><div></div>";
export const _walks_ = /* get, over(1), get, over(1), get, over(1) */" b b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_input_value_a_effect = _$.effect("__tests__/template.marko_0_input_value_a", _scope => _$.attrsEvents(_scope, "#div/1"));
const _expr_input_value_a = /* @__PURE__ */_$.intersection(7, _scope => {
  const {
    input_value,
    a
  } = _scope;
  _$.attrs(_scope, "#div/1", {
    a: a,
    ...input_value
  });
  _expr_input_value_a_effect(_scope);
});
const _a = /* @__PURE__ */_$.state("a/6", (_scope, a) => {
  _$.attr(_scope["#div/2"], "a", a);
  _expr_input_value_a(_scope);
});
const _input_value__effect = _$.effect("__tests__/template.marko_0_input_value", _scope => {
  _$.attrsEvents(_scope, "#div/0");
  _$.attrsEvents(_scope, "#div/2");
});
export const _input_value_ = /* @__PURE__ */_$.value("input_value", (_scope, input_value) => {
  _$.attrs(_scope, "#div/0", input_value);
  _$.partialAttrs(_scope, "#div/2", input_value, {
    a: 1
  });
  _expr_input_value_a(_scope);
  _input_value__effect(_scope);
});
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_value_(_scope, input.value));
export function _setup_(_scope) {
  _a(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, _input_);