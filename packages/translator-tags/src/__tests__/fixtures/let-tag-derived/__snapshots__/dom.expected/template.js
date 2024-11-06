export const _template_ = "<button>Increment</button><!> <!>";
export const _walks_ = /* get, over(1), replace, over(2), replace, over(1) */" b%c%b";
export const _setup_ = () => {};
import { on as _on, data as _data, effect as _effect, state as _state, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    b
  } = _scope;
  return () => (_b(_scope, b + 1), b);
};
const _b_effect = _effect("packages/translator-tags/src/__tests__/fixtures/let-tag-derived/template.marko_0_b", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _b = /* @__PURE__ */_state("b", (_scope, b) => {
  _data(_scope["#text/2"], b);
  _b_effect(_scope);
});
export const _a_ = /* @__PURE__ */_value("a", (_scope, a) => {
  _data(_scope["#text/1"], a);
  _b(_scope, a * 2);
});
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => _a_(_scope, input.a));
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/let-tag-derived/template.marko");