export const _template = "<div> </div><!>";
export const _walks = /* next(1), get, out(1), replace, over(1) */"D l%b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _y = /* @__PURE__ */_$.value("y", (_scope, y) => _$.data(_scope["#text/1"], y));
const _x = /* @__PURE__ */_$.value("x", (_scope, x) => _$.data(_scope["#text/0"], x));
export function _setup(_scope) {
  _x(_scope, _$.nextTagId(_scope));
  _y(_scope, _$.nextTagId(_scope));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);