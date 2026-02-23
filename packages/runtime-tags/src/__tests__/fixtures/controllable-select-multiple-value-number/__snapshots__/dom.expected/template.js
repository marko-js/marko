export const $template = "<select multiple><option value=0></option><option value=1></option><option value=2></option></select><span> </span><button>Reset</button>";
export const $walks = /* get, over(1), next(1), get, out(1), get, over(1) */" bD l b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $selected = /* @__PURE__ */_._let("selected/3", $scope => {
  _._attr_select_value($scope, "#select/0", $scope.selected, $valueChange($scope));
  _._text($scope["#text/1"], $scope.selected);
});
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  _._attr_select_value_script($scope, "#select/0");
  _._on($scope["#button/2"], "click", function () {
    $selected($scope, [1]);
  });
});
export function $setup($scope) {
  $selected($scope, [1]);
  $setup__script($scope);
}
function $valueChange($scope) {
  return function (v) {
    $selected($scope, v.map(it => Number(it)));
  };
}
_._resume("__tests__/template.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);