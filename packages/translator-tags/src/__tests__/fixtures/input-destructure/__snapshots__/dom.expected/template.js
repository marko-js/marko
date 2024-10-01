export const _template_ = "<!> <!>";
export const _walks_ = /* replace, over(2), replace, over(1) */"%c%b";
export const _setup_ = () => {};
import { data as _data, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
export const _b_ = /* @__PURE__ */_value("b", (_scope, b) => _data(_scope["#text/1"], b));
export const _a_ = /* @__PURE__ */_value("a", (_scope, a) => _data(_scope["#text/0"], a));
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => {
  _a_(_scope, input.a);
  _b_(_scope, input.b);
});
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/input-destructure/template.marko");