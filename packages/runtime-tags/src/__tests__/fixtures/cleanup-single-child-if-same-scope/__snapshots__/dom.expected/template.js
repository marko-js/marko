export const _template_ = "<button>Toggle</button><pre></pre><!><!>";
export const _walks_ = /* get, over(1), get, over(1), replace, over(1) */" b b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _setup$if_content_effect = _$.effect("__tests__/template.marko_1", _scope => {
  _scope._["#pre/1"].innerHTML += '\nmounted';
  _$.getAbortSignal(_scope, 0).onabort = () => {
    _scope._["#pre/1"].innerHTML += '\ndestroyed';
  };
});
const _setup$if_content = _scope => {
  _$.resetAbortSignal(_scope, 0);
  _setup$if_content_effect(_scope);
};
const _if_content = /* @__PURE__ */_$.createRenderer("<div>child</div>", 0, _setup$if_content);
const _if = /* @__PURE__ */_$.conditional("#text/2", _if_content);
const _show_effect = _$.effect("__tests__/template.marko_0_show", (_scope, {
  show
}) => _$.on(_scope["#button/0"], "click", function () {
  _show(_scope, !show);
}));
const _show = /* @__PURE__ */_$.state("show/3", (_scope, show) => {
  _if(_scope, show ? 0 : 1);
  _show_effect(_scope);
});
export function _setup_(_scope) {
  _show(_scope, true);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);