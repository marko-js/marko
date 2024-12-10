export const _template_ = "<div><button id=button>0</button></div>";
export const _walks_ = /* next(1), get, out(1) */"D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _clickCount_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/effect-counter/template.marko_0_clickCount", (_scope, {
  clickCount
}) => {
  document.getElementById("button").textContent = clickCount;
  _$.on(_scope["#button/0"], "click", function () {
    _clickCount(_scope, clickCount + 1), clickCount;
  });
});
const _clickCount = /* @__PURE__ */_$.state("clickCount", (_scope, clickCount) => _clickCount_effect(_scope));
export function _setup_(_scope) {
  _clickCount(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/effect-counter/template.marko", _template_, _walks_, _setup_);