export const $template = "<div id=foo></div>";
export const $walks = /* over(1) */"b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  {
    const el = document.getElementById("foo");
    el.innerHTML = "foo";
    _.$signal($scope, 0).onabort = () => el.innerHTML = "";
  }
});
export function $setup($scope) {
  _.$signalReset($scope, 0);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);