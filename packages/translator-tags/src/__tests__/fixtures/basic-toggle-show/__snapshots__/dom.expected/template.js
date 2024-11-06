export const _template_ = "<div><!><button>Toggle</button></div>";
export const _walks_ = /* next(1), replace, over(1), get, out(1) */"D%b l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _ifBody = _$.register("packages/translator-tags/src/__tests__/fixtures/basic-toggle-show/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer("Hello!", ""));
const _if = /* @__PURE__ */_$.conditional("#text/0", 0);
const _onClick = _scope => {
  const {
    show
  } = _scope;
  return function () {
    _show(_scope, !show);
  };
};
const _show_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/basic-toggle-show/template.marko_0_show", _scope => _$.on(_scope["#button/1"], "click", _onClick(_scope)));
const _show = /* @__PURE__ */_$.state("show", (_scope, show) => {
  _show_effect(_scope);
  _if(_scope, show ? _ifBody : null);
});
export function _setup_(_scope) {
  _show(_scope, true);
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-toggle-show/template.marko");