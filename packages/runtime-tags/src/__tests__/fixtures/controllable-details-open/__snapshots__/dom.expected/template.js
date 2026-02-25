export const $template = "<details><summary></summary></details><span> </span>";
export const $walks = /* get, over(1), next(1), get, out(1) */" bD l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $open = /* @__PURE__ */_._let("open/2", $scope => {
  _._attr_details_open($scope, "#details/0", $scope.open, $openChange($scope));
  _._text($scope["#text/1"], String($scope.open));
});
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._attr_details_open_script($scope, "#details/0"));
export function $setup($scope) {
  $open($scope, false);
  $setup__script($scope);
}
function $openChange($scope) {
  return _new_open => {
    $open($scope, _new_open);
  };
}
_._resume("__tests__/template.marko_0/openChange", $openChange);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);