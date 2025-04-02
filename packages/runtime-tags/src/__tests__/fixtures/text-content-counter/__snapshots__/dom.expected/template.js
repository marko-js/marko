export const _template = "<div><button id=button>0</button></div>";
export const _walks = /* next(1), get, out(1) */"D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _clickCount_effect = _$.effect("__tests__/template.marko_0_clickCount", (_scope, {
  clickCount
}) => {
  document.getElementById("button").textContent = clickCount;
  _$.on(_scope["#button/0"], "click", function () {
    _clickCount(_scope, clickCount + 1), clickCount;
  });
});
const _clickCount = /* @__PURE__ */_$.state("clickCount/1", _clickCount_effect);
export function _setup(_scope) {
  _clickCount(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);