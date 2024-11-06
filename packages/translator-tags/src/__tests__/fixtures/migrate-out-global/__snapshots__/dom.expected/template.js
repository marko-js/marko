export const _template_ = "<div><span> </span></div>";
export const _walks_ = /* next(2), get, out(2) */"E m";
import * as _$ from "@marko/runtime-tags/debug/dom";
export function _setup_(_scope) {
  _$.data(_scope["#text/0"], _scope.$global.x);
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/migrate-out-global/template.marko");