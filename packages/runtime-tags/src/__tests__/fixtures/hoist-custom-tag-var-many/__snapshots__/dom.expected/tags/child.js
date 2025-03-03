export const _template_ = "<div></div>";
export const _walks_ = /* get, over(1) */" b";
import * as _$ from "@marko/runtime-tags/debug/dom";
export function _setup_(_scope) {
  _$.tagVarSignal(_scope, _return(_scope));
}
function _return(_scope) {
  return function (html) {
    _scope["#div/0"].innerHTML = html;
  };
}
_$.register("__tests__/tags/child.marko_0/_return", _return);
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _template_, _walks_, _setup_);