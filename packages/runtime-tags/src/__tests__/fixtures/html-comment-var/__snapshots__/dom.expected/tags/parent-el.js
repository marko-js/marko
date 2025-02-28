export const _template_ = "<!--Body Text-->";
export const _walks_ = /* get, over(1) */" b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _tagName = /* @__PURE__ */_$.state("tagName/1", (_scope, tagName) => _$.tagVarSignal(_scope, tagName));
const _setup__effect = _$.effect("__tests__/tags/parent-el.marko_0", _scope => _tagName(_scope, _scope["#comment/0"].parentElement.tagName));
export function _setup_(_scope) {
  _tagName(_scope, undefined);
  _setup__effect(_scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/parent-el.marko", _template_, _walks_, _setup_);