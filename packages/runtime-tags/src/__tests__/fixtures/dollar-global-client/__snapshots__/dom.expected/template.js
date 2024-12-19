export const _template_ = "<div><!><!><button>Toggle</button></div>";
export const _walks_ = /* next(1), replace, over(1), replace, over(1), get, out(1) */"D%b%b l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _setup$if_content2 = _scope => {
  _$.data(_scope["#text/0"], _scope.$global.x);
};
const _if_content2 = _$.register("__tests__/template.marko_2_renderer", /* @__PURE__ */_$.createRenderer("<span class=hidden> </span>", /* next(1), get */"D ", _setup$if_content2));
const _setup$if_content = _scope => {
  _$.data(_scope["#text/0"], _scope.$global.x);
};
const _if_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer("<span> </span>", /* next(1), get */"D ", _setup$if_content));
const _if2 = /* @__PURE__ */_$.conditional("#text/1", 0);
const _if = /* @__PURE__ */_$.conditional("#text/0", 0);
const _show_effect = _$.effect("__tests__/template.marko_0_show", (_scope, {
  show
}) => _$.on(_scope["#button/2"], "click", function () {
  _show(_scope, !show);
}));
const _show = /* @__PURE__ */_$.state("show", (_scope, show) => {
  _show_effect(_scope);
  _if(_scope, show ? _if_content : null);
  _if2(_scope, !show ? _if_content2 : null);
});
export function _setup_(_scope) {
  _show(_scope, false);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);