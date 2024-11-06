export const _template_ = "<div><!><button>Toggle</button></div>";
export const _walks_ = /* next(1), replace, over(1), get, out(1) */"D%b l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _setup$ifBody = _scope => {
  _$.data(_scope["#text/0"], _scope.$global.x);
};
const _ifBody = _$.register("packages/translator-tags/src/__tests__/fixtures/dollar-global-client/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer("<span> </span>", /* next(1), get */"D ", _setup$ifBody));
const _if = /* @__PURE__ */_$.conditional("#text/0", 0);
const _onClick = _scope => {
  const {
    show
  } = _scope;
  return function () {
    _show(_scope, !show);
  };
};
const _show_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/dollar-global-client/template.marko_0_show", _scope => _$.on(_scope["#button/1"], "click", _onClick(_scope)));
const _show = /* @__PURE__ */_$.state("show", (_scope, show) => {
  _show_effect(_scope);
  _if(_scope, show ? _ifBody : null);
});
export function _setup_(_scope) {
  _show(_scope, false);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/dollar-global-client/template.marko", _template_, _walks_, _setup_);