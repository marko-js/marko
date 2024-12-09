export const _template_ = "<button id=tags> </button>";
export const _walks_ = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _count_effect = _$.effect("packages/translator-interop/src/__tests__/fixtures/interop-class-to-tags-import/components/tags-counter.marko_0_count", (_scope, {
  count
}) => _$.on(_scope["#button/0"], "click", function () {
  _count(_scope, count + 1), count;
}));
const _count = /* @__PURE__ */_$.state("count", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _count_effect(_scope);
});
export const _input_count_ = /* @__PURE__ */_$.value("input_count", (_scope, input_count) => _$.attr(_scope["#button/0"], "data-parent", input_count));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_count_(_scope, input.count));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export function _setup_(_scope) {
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-interop/src/__tests__/fixtures/interop-class-to-tags-import/components/tags-counter.marko", _template_, _walks_, _setup_, void 0, () => _params__);