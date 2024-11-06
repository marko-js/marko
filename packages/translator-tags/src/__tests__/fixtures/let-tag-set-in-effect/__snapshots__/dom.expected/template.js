export const _template_ = "<span> </span><span> </span>";
export const _walks_ = /* next(1), get, out(1), next(1), get, out(1) */"D lD l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _y = /* @__PURE__ */_$.state("y", (_scope, y) => _$.data(_scope["#text/1"], y));
const _x_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/let-tag-set-in-effect/template.marko_0_x", _scope => {
  const {
    x
  } = _scope;
  _y(_scope, x);
  _x(_scope, 2);
});
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => {
  _$.data(_scope["#text/0"], x);
  _x_effect(_scope);
});
export function _setup_(_scope) {
  _x(_scope, 1);
  _y(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/let-tag-set-in-effect/template.marko", _template_, _walks_, _setup_);