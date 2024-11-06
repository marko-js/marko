export const _template_ = "<div><!><button>Toggle</button></div>";
export const _walks_ = /* next(1), replace, over(1), get, out(1) */"D%b l";
import { on as _on, createRenderer as _createRenderer, register as _register, conditional as _conditional, queueEffect as _queueEffect, state as _state, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _ifBody = _register("packages/translator-tags/src/__tests__/fixtures/basic-toggle-show/template.marko_1_renderer", /* @__PURE__ */_createRenderer("Hello!", ""));
const _if = /* @__PURE__ */_conditional("#text/0");
const _onClick = _scope => {
  const {
    show
  } = _scope;
  return function () {
    _show(_scope, !show);
  };
};
const _show_effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-toggle-show/template.marko_0_show", _scope => _on(_scope["#button/1"], "click", _onClick(_scope)));
const _show = /* @__PURE__ */_state("show", (_scope, show) => {
  _queueEffect(_scope, _show_effect);
  _if(_scope, show ? _ifBody : null);
});
export function _setup_(_scope) {
  _show(_scope, true);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-toggle-show/template.marko");