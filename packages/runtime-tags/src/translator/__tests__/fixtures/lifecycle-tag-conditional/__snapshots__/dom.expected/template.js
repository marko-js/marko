export const _template_ = "<!><!><div id=ref></div><button id=increment>Increment</button><button id=toggle>Toggle</button>";
export const _walks_ = /* replace, over(2), get, over(1), get, over(1) */"D%c b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _x$ifBody_effect = _$.effect("__tests__/template.marko_1_x", (_scope, {
  _: {
    x
  }
}) => _$.lifecycle(_scope, "_lifecycle", {
  onMount: function () {
    document.getElementById("ref").textContent = "Mount " + x;
  },
  onUpdate: function () {
    document.getElementById("ref").textContent = "Update " + x;
  },
  onDestroy: function () {
    document.getElementById("ref").textContent = "Destroy";
  }
}));
const _x$ifBody = /* @__PURE__ */_$.closure("x", (_scope, x) => _x$ifBody_effect(_scope));
const _ifBody = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer("", "", void 0, () => [_x$ifBody]));
const _if = /* @__PURE__ */_$.conditional("#text/0", 0);
const _show_effect = _$.effect("__tests__/template.marko_0_show", (_scope, {
  show
}) => _$.on(_scope["#button/2"], "click", function () {
  _show(_scope, !show);
}));
const _show = /* @__PURE__ */_$.state("show", (_scope, show) => {
  _show_effect(_scope);
  _if(_scope, show ? _ifBody : null);
}, () => _if);
const _x_effect = _$.effect("__tests__/template.marko_0_x", (_scope, {
  x
}) => _$.on(_scope["#button/1"], "click", function () {
  _x(_scope, x + 1), x;
}));
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => _x_effect(_scope), () => _$.inConditionalScope(_x$ifBody, "#text/0"));
export function _setup_(_scope) {
  _x(_scope, 0);
  _show(_scope, true);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);