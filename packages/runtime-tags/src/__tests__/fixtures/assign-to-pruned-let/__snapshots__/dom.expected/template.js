export const $template = "<button>Before</button>";
export const $walks = /* get, over(1) */" b";
import * as _2 from "@marko/runtime-tags/debug/dom";
const $setup__script = _2._script("__tests__/template.marko_0", $scope => _2._on($scope["#button/0"], "click", function (_, el) {
  el.textContent = "" + (/* count */0);
}));
export function $setup($scope) {
  /* count */0;
  $setup__script($scope);
}
export default /* @__PURE__ */_2._template("__tests__/template.marko", $template, $walks, $setup);