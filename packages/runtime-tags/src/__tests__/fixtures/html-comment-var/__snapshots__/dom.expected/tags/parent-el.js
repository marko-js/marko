export const _template = "<!--Body Text-->";
export const _walks = /* get, over(1) */" b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _tagName = /* @__PURE__ */_$.state("tagName/1", _$.tagVarSignal);
const _setup_effect = _$.effect("__tests__/tags/parent-el.marko_0", _scope => _tagName(_scope, _scope["#comment/0"].parentElement.tagName));
export function _setup(_scope) {
  _tagName(_scope, undefined);
  _setup_effect(_scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/parent-el.marko", _template, _walks, _setup);