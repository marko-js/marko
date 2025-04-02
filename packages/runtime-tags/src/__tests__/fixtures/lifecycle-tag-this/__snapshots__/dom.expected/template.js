export const _template = "<div id=ref></div><button id=increment>Increment</button>";
export const _walks = /* over(1), get, over(1) */"b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _x_effect = _$.effect("__tests__/template.marko_0_x", (_scope, {
  x
}) => {
  _$.lifecycle(_scope, "_lifecycle", {
    onMount: function () {
      this.onUpdate();
    },
    onUpdate: function () {
      document.getElementById("ref").textContent = `x=${x}, was=${this.cur}`;
      this.cur = x;
    }
  });
  _$.on(_scope["#button/0"], "click", function () {
    _x(_scope, x + 1), x;
  });
});
const _x = /* @__PURE__ */_$.state("x/1", _x_effect);
export function _setup(_scope) {
  _x(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);