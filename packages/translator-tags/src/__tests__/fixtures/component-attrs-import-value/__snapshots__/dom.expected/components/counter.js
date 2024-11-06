export const _template_ = "<button> </button>";
export const _walks_ = /* get, next(1), get, out(1) */" D l";
import { on as _on, data as _data, intersection as _intersection, effect as _effect, state as _state, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _expr_input_count = /* @__PURE__ */_intersection(2, _scope => {
  const {
    input,
    count
  } = _scope;
  _data(_scope["#text/1"], input.format(count));
});
const _onClick = _scope => {
  const {
    count
  } = _scope;
  return function () {
    _count(_scope, count + 1);
  };
};
const _count_effect = _effect("packages/translator-tags/src/__tests__/fixtures/component-attrs-import-value/components/counter.marko_0_count", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _count = /* @__PURE__ */_state("count", (_scope, count) => _count_effect(_scope), () => _expr_input_count);
export const _input_ = /* @__PURE__ */_value("input", null, () => _expr_input_count);
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export function _setup_(_scope) {
  _count(_scope, 0);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/component-attrs-import-value/components/counter.marko");