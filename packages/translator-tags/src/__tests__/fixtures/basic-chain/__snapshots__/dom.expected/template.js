export const _template_ = "<div> </div>";
export const _walks_ = /* next(1), get, out(1) */"D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _z = /* @__PURE__ */_$.value("z", (_scope, z) => _$.data(_scope["#text/0"], z));
const _y = /* @__PURE__ */_$.value("y", (_scope, y) => _z(_scope, y * 3));
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => _y(_scope, x * 2));
export function _setup_(_scope) {
  _x(_scope, 1);
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-chain/template.marko");