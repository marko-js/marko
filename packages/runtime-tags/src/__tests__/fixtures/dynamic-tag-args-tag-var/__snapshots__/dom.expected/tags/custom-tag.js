export const $template = "<div>Child: <!></div>";
export const $walks = /* next(1), over(1), replace, out(1) */"Db%l";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  _$.data($scope["#text/0"], input);
  _$.tagVarSignal($scope, input);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/custom-tag.marko", $template, $walks, $setup, $input);