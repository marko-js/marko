export const _template_ = "<div></div>";
export const _walks_ = /* get, over(1) */" b";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _$.classAttr(_scope["#div/0"], input.foo);
  _$.attr(_scope["#div/0"], "foo", 'a' + input.foo + 'b');
  _$.attr(_scope["#div/0"], "bar", `a ${input.bar} b`);
  _$.attr(_scope["#div/0"], "nested", `a ${input.foo + ` nested ${input.bar}`} b`);
});
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/attr-escape/template.marko", _template_, _walks_, _setup_, void 0, () => _params__);