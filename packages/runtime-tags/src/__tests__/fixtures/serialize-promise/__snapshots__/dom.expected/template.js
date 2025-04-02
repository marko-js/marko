export const _template = "<div id=ref>0</div>";
export const _walks = /* over(1) */"b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _promise_effect = _$.effect("__tests__/template.marko_0_promise", ({
  promise
}) => (async () => {
  document.getElementById("ref").textContent = await promise;
})());
const _promise = /* @__PURE__ */_$.value("promise", _scope => _promise_effect(_scope));
export function _setup(_scope) {
  _promise(_scope, Promise.resolve("hello"));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);