export const _template_ = "<div></div>";
export const _walks_ = /* get, over(1) */" b";
export const _setup_ = () => {};
import { classAttr as _classAttr, attr as _attr, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => {
  _classAttr(_scope["#div/0"], input.foo);
  _attr(_scope["#div/0"], "foo", 'a' + input.foo + 'b');
  _attr(_scope["#div/0"], "bar", `a ${input.bar} b`);
  _attr(_scope["#div/0"], "nested", `a ${input.foo + ` nested ${input.bar}`} b`);
});
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/attr-escape/template.marko");