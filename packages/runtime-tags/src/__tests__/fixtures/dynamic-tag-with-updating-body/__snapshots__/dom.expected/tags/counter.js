export const _template_ = "<button id=count> </button>";
export const _walks_ = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _count_effect = _$.effect("__tests__/tags/counter.marko_0_count", (_scope, {
  "count/2": count
}) => _$.on(_scope["#button/0"], "click", function () {
  _count(_scope, count + 1), count;
}));
const _count = /* @__PURE__ */_$.state("count/2", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _count_effect(_scope);
});
export function _setup_(_scope) {
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/counter.marko", _template_, _walks_, _setup_);