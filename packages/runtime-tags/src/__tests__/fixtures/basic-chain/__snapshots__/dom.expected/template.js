export const _template = "<div> </div>";
export const _walks = /* next(1), get, out(1) */"D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _z = /* @__PURE__ */_$.value("z", (_scope, z) => _$.data(_scope["#text/0"], z));
const _y = /* @__PURE__ */_$.value("y", (_scope, y) => _z(_scope, y * 3));
const _x = /* @__PURE__ */_$.state("x/1", (_scope, x) => _y(_scope, x * 2));
export function _setup(_scope) {
  _x(_scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);