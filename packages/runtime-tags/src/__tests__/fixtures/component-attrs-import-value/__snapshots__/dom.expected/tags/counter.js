export const _template_ = "<button> </button>";
export const _walks_ = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_input_count = /* @__PURE__ */_$.intersection(5, _scope => {
  const {
    input,
    count
  } = _scope;
  _$.data(_scope["#text/1"], input.format(count));
});
const _count_effect = _$.effect("__tests__/tags/counter.marko_0_count", (_scope, {
  count
}) => _$.on(_scope["#button/0"], "click", function () {
  _count(_scope, count + 1), count;
}));
const _count = /* @__PURE__ */_$.state("count/4", (_scope, count) => {
  _expr_input_count(_scope);
  _count_effect(_scope);
});
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _expr_input_count(_scope));
export function _setup_(_scope) {
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/counter.marko", _template_, _walks_, _setup_, _input_);