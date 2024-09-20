export const _template_ = "<button>Toggle</button><pre></pre><!><!>";
export const _walks_ = /* get, over(1), get, over(1), replace, over(1) */" b b%bD";
import { on as _on, resetAbortSignal as _resetAbortSignal, getAbortSignal as _getAbortSignal, queueSource as _queueSource, createRenderer as _createRenderer, register as _register, queueEffect as _queueEffect, conditional as _conditional, value as _value, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _setup$ifBody_effect = _register("packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-same-scope/template.marko_1", _scope => {
  _scope._["#pre/1"].innerHTML += '\nmounted';
  _getAbortSignal(_scope, 0).onabort = () => {
    debugger;
    _scope._["#pre/1"].innerHTML += '\ndestroyed';
  };
});
const _setup$ifBody = _scope => {
  _resetAbortSignal(_scope, 0);
  _queueEffect(_scope, _setup$ifBody_effect);
};
const _ifBody = _register("packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-same-scope/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<div>a</div><span>b</span><p>c</p>", "", _setup$ifBody));
const _if = /* @__PURE__ */_conditional("#text/2");
const _onClick = _scope => {
  const {
    show
  } = _scope;
  return function () {
    _queueSource(_scope, _show, !show);
  };
};
const _show_effect = _register("packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-same-scope/template.marko_0_show", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _show = /* @__PURE__ */_value("show", (_scope, show) => {
  _queueEffect(_scope, _show_effect);
  _if(_scope, show ? _ifBody : null);
});
export function _setup_(_scope) {
  _show(_scope, true);
}
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-same-scope/template.marko");