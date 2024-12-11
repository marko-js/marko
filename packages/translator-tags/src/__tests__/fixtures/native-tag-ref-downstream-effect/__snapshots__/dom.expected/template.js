export const _template_ = "<div></div><!><!>";
export const _walks_ = /* get, over(1), replace, over(1) */" b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _setup$ifBody_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/native-tag-ref-downstream-effect/template.marko_1", _scope => (_scope._["#div/0"].textContent = "hello"));
const _setup$ifBody = _scope => {
  _setup$ifBody_effect(_scope);
};
const _ifBody = /* @__PURE__ */_$.createRenderer("", "", _setup$ifBody);
const _if = /* @__PURE__ */_$.conditional("#text/1", 0);
export function _setup_(_scope) {
  _if(_scope, true ? _ifBody : null);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/native-tag-ref-downstream-effect/template.marko", _template_, _walks_, _setup_);