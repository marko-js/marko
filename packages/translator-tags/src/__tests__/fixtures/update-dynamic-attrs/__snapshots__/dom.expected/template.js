export const _template_ = "<div></div><div></div><div></div>";
export const _walks_ = /* get, over(1), get, over(1), get, over(1) */" b b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_input_a_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/update-dynamic-attrs/template.marko_0_input_a", _scope => _$.attrsEvents(_scope, "#div/1"));
const _expr_input_a = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    input,
    a
  } = _scope;
  _$.attrs(_scope, "#div/1", {
    a: a,
    ...input.value
  });
  _expr_input_a_effect(_scope);
});
const _a = /* @__PURE__ */_$.state("a", (_scope, a) => _$.attr(_scope["#div/2"], "a", a), () => _expr_input_a);
const _input__effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/update-dynamic-attrs/template.marko_0_input", _scope => {
  const {
    input
  } = _scope;
  _$.attrsEvents(_scope, "#div/0");
  _$.attrsEvents(_scope, "#div/2");
});
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _$.attrs(_scope, "#div/0", input.value);
  _$.partialAttrs(_scope, "#div/2", input.value, {
    a: 1
  });
  _input__effect(_scope);
}, () => _expr_input_a);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export function _setup_(_scope) {
  _a(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/update-dynamic-attrs/template.marko");