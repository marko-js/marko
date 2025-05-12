export const $template = "<div id=foo></div>";
export const $walks = /* over(1) */"b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => {
  {
    const el = document.getElementById("foo");
    el.innerHTML = "foo";
    _$.getAbortSignal($scope, 0).onabort = () => el.innerHTML = "";
  }
});
export function $setup($scope) {
  _$.resetAbortSignal($scope, 0);
  $setup_effect($scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);