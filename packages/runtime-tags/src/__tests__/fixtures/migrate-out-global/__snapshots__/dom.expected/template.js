export const _template = "<div><span> </span></div>";
export const _walks = /* next(2), get, out(2) */"E m";
import * as _$ from "@marko/runtime-tags/debug/dom";
export function _setup(_scope) {
  _$.data(_scope["#text/0"], _scope.$global.x);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);