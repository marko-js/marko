export const _template_ = "<button> </button>";
export const _walks_ = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_input_count = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    input,
    count
  } = _scope;
  _$.data(_scope["#text/1"], input.format(count));
});
const _count_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/component-attrs-static-code/components/counter.marko_0_count", (_scope, {
  count
}) => _$.on(_scope["#button/0"], "click", function () {
  _count(_scope, count + 1), count;
}));
const _count = /* @__PURE__ */_$.state("count", (_scope, count) => _count_effect(_scope), () => _expr_input_count);
export const _input_ = /* @__PURE__ */_$.value("input", 0, () => _expr_input_count);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export function _setup_(_scope) {
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/component-attrs-static-code/components/counter.marko", _template_, _walks_, _setup_, void 0, () => _params__);