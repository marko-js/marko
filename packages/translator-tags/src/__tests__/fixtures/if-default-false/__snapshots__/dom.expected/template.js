export const _template_ = "<button></button><!><!>";
export const _walks_ = /* get, over(1), replace, over(1) */" b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _ifBody = _$.register("packages/translator-tags/src/__tests__/fixtures/if-default-false/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer("hi", ""));
const _if = /* @__PURE__ */_$.conditional("#text/1", 0);
const _show_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/if-default-false/template.marko_0_show", (_scope, {
  show
}) => _$.on(_scope["#button/0"], "click", function () {
  _show(_scope, !show);
}));
const _show = /* @__PURE__ */_$.state("show", (_scope, show) => {
  _show_effect(_scope);
  _if(_scope, show ? _ifBody : null);
});
export function _setup_(_scope) {
  _show(_scope, false);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/if-default-false/template.marko", _template_, _walks_, _setup_);