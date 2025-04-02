export const _template = "<div> </div>";
export const _walks = /* next(1), get, out(1) */"D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _x = /* @__PURE__ */_$.state("x/1", (_scope, x) => _$.data(_scope["#text/0"], x));
const _setup_effect = _$.effect("__tests__/template.marko_0", _scope => _x(_scope, "Client Only"));
export function _setup(_scope) {
  _x(_scope, undefined);
  _setup_effect(_scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);