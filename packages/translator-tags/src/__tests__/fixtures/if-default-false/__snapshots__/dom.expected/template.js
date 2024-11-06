export const _template_ = "<button></button><!><!>";
export const _walks_ = /* get, over(1), replace, over(1) */" b%bD";
import { on as _on, createRenderer as _createRenderer, register as _register, conditional as _conditional, effect as _effect, state as _state, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _ifBody = _register("packages/translator-tags/src/__tests__/fixtures/if-default-false/template.marko_1_renderer", /* @__PURE__ */_createRenderer("hi", ""));
const _if = /* @__PURE__ */_conditional("#text/1");
const _onClick = _scope => {
  const {
    show
  } = _scope;
  return function () {
    _show(_scope, !show);
  };
};
const _show_effect = _effect("packages/translator-tags/src/__tests__/fixtures/if-default-false/template.marko_0_show", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _show = /* @__PURE__ */_state("show", (_scope, show) => {
  _show_effect(_scope);
  _if(_scope, show ? _ifBody : null);
});
export function _setup_(_scope) {
  _show(_scope, false);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/if-default-false/template.marko");