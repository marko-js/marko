export const _template_ = "<button id=tags> </button>";
export const _walks_ = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    count
  } = _scope;
  return function () {
    _count(_scope, count + 1);
  };
};
const _count_effect = _$.effect("packages/translator-interop/src/__tests__/fixtures/interop-basic-class-to-tags/components/tags-counter.marko_0_count", _scope => _$.on(_scope["#button/0"], "click", _onClick(_scope)));
const _count = /* @__PURE__ */_$.state("count", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _count_effect(_scope);
});
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _$.attr(_scope["#button/0"], "data-parent", input.count));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export function _setup_(_scope) {
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-interop/src/__tests__/fixtures/interop-basic-class-to-tags/components/tags-counter.marko");