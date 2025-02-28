export const _template_ = "<!><!><div id=ref></div><button id=increment>Increment</button><button id=toggle>Toggle</button>";
export const _walks_ = /* replace, over(2), get, over(1), get, over(1) */"D%c b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _x$if_content_effect = _$.effect("__tests__/template.marko_1_x", (_scope, {
  _: {
    "x/3": x
  }
}) => _$.lifecycle(_scope, "_lifecycle/5", {
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
const _x$if_content = /* @__PURE__ */_$.conditionalClosure("x/3", "#text/0", 0, (_scope, x) => _x$if_content_effect(_scope));
const _setup$if_content = _scope => {
  _x$if_content._(_scope);
};
const _if_content = /* @__PURE__ */_$.createRenderer(void 0, void 0, _setup$if_content);
const _if = /* @__PURE__ */_$.conditional("#text/0", _if_content);
const _show_effect = _$.effect("__tests__/template.marko_0_show", (_scope, {
  "show/4": show
}) => _$.on(_scope["#button/2"], "click", function () {
  _show(_scope, !show);
}));
const _show = /* @__PURE__ */_$.state("show/4", (_scope, show) => {
  _if(_scope, show ? 0 : 1);
  _show_effect(_scope);
});
const _x_effect = _$.effect("__tests__/template.marko_0_x", (_scope, {
  "x/3": x
}) => _$.on(_scope["#button/1"], "click", function () {
  _x(_scope, x + 1), x;
}));
const _x = /* @__PURE__ */_$.state("x/3", (_scope, x) => {
  _x$if_content(_scope);
  _x_effect(_scope);
});
export function _setup_(_scope) {
  _x(_scope, 0);
  _show(_scope, true);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);