export const _template = "<div></div>";
export const _walks = /* get, over(1) */" b";
import * as _$ from "@marko/runtime-tags/debug/dom";
export function _setup(_scope) {
  _$.tagVarSignal(_scope, _return(_scope));
}
function _return(_scope) {
  return function (html) {
    _scope["#div/0"].innerHTML = html;
  };
}
_$.register("__tests__/tags/child.marko_0/_return", _return);
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _template, _walks, _setup);