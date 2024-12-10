export const _template_ = "<button>Toggle</button><pre></pre><!><!>";
export const _walks_ = /* get, over(1), get, over(1), replace, over(1) */" b b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _setup$ifBody_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-same-scope/template.marko_1", _scope => {
  _scope._["#pre/1"].innerHTML += '\nmounted';
  _$.getAbortSignal(_scope, 0).onabort = () => {
    _scope._["#pre/1"].innerHTML += '\ndestroyed';
  };
});
const _setup$ifBody = _scope => {
  _$.resetAbortSignal(_scope, 0);
  _setup$ifBody_effect(_scope);
};
const _ifBody = _$.register("packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-same-scope/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer("<div>child</div>", "", _setup$ifBody));
const _if = /* @__PURE__ */_$.conditional("#text/2", 0);
const _show_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-same-scope/template.marko_0_show", (_scope, {
  show
}) => _$.on(_scope["#button/0"], "click", function () {
  _show(_scope, !show);
}));
const _show = /* @__PURE__ */_$.state("show", (_scope, show) => {
  _show_effect(_scope);
  _if(_scope, show ? _ifBody : null);
});
export function _setup_(_scope) {
  _show(_scope, true);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-same-scope/template.marko", _template_, _walks_, _setup_);