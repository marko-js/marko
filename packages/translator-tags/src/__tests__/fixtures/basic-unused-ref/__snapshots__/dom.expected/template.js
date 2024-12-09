export const _template_ = "<div><button> </button></div>";
export const _walks_ = /* next(1), get, next(1), get, out(2) */"D D m";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _unused_2 = (_scope, unused_2) => {};
const _unused_ = (_scope, unused_1) => {};
const _clickCount_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/basic-unused-ref/template.marko_0_clickCount", (_scope, {
  clickCount
}) => _$.on(_scope["#button/0"], "click", function () {
  _clickCount(_scope, clickCount + 1), clickCount;
}));
const _clickCount = /* @__PURE__ */_$.state("clickCount", (_scope, clickCount) => {
  _$.data(_scope["#text/1"], clickCount);
  _clickCount_effect(_scope);
});
export function _setup_(_scope) {
  _unused_(_scope, 123);
  _unused_2(_scope, 456);
  _clickCount(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-unused-ref/template.marko", _template_, _walks_, _setup_);