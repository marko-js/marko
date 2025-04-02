export const _template = "<button id=tags> </button>";
export const _walks = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _count_effect = _$.effect("__tests__/components/tags-counter.marko_0_count", (_scope, {
  count
}) => _$.on(_scope["#button/0"], "click", function () {
  _count(_scope, count + 1), count;
}));
const _count = /* @__PURE__ */_$.state("count/5", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _count_effect(_scope);
});
export const _input_count = /* @__PURE__ */_$.value("input_count", (_scope, input_count) => _$.attr(_scope["#button/0"], "data-parent", input_count));
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _input_count(_scope, input.count));
export function _setup(_scope) {
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/components/tags-counter.marko", _template, _walks, _setup, _input);