export const _template_ = "<div>x=<span> </span>, was=<!></div><button id=increment>Increment</button>";
export const _walks_ = /* next(1), over(1), next(1), get, out(1), over(1), replace, out(1), get, over(1) */"DbD lb%l b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _prev = /* @__PURE__ */_$.state("prev", (_scope, prev) => _$.data(_scope["#text/1"], prev));
const _x_effect = _$.effect("__tests__/template.marko_0_x", (_scope, {
  x
}) => {
  _$.lifecycle(_scope, "_lifecycle", {
    onMount: function () {
      this.cur = x;
    },
    onUpdate: function () {
      _prev(_scope, this.cur);
      this.cur = x;
    }
  });
  _$.on(_scope["#button/2"], "click", function () {
    _x(_scope, x + 1), x;
  });
});
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => {
  _$.data(_scope["#text/0"], x);
  _x_effect(_scope);
});
export function _setup_(_scope) {
  _x(_scope, 0);
  _prev(_scope, false);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);