export const _template_ = "<div> </div><!>";
export const _walks_ = /* next(1), get, out(1), replace, over(1) */"D l%b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _y = /* @__PURE__ */_$.value("y", (_scope, y) => _$.data(_scope["#text/1"], y));
const _x = /* @__PURE__ */_$.value("x", (_scope, x) => _$.data(_scope["#text/0"], x));
const _z = /* @__PURE__ */_$.state("z", (_scope, z) => {
  _x(_scope, z.x);
  _y(_scope, z.y);
});
export function _setup_(_scope) {
  _z(_scope, {
    x: 1,
    y: 2
  });
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/const-tag-destructure/template.marko");