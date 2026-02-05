export const $template = "<!><!><div> </div>";
export const $walks = /* over(1), replace, over(1), next(1), get, out(1) */"b%bD l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content__checked = /* @__PURE__ */_._let("checked/6", $scope => _._attr_input_checked($scope, "#input/0", $scope.checked, $checkedChange($scope)));
const $for_content__states__OR__state = /* @__PURE__ */_._or(3, $scope => $for_content__checked($scope, $scope.state, $valueChange($scope)));
const $for_content__states = /* @__PURE__ */_._for_closure("#text/0", $for_content__states__OR__state);
const $for_content__setup__script = _._script("__tests__/template.marko_1", $scope => _._attr_input_checked_script($scope, "#input/0"));
const $for_content__setup = $scope => {
  $for_content__states._($scope);
  $for_content__setup__script($scope);
};
const $for_content__state = /* @__PURE__ */_._const("state", $for_content__states__OR__state);
const $for_content__$params = ($scope, $params2) => $for_content__state($scope, $params2[0]);
const $for = /* @__PURE__ */_._for_of("#text/0", "<input type=checkbox>", /* get, over(1) */" b", $for_content__setup, $for_content__$params);
const $states = /* @__PURE__ */_._let("states/2", $scope => {
  _._text($scope["#text/1"], $scope.states.join(','));
  $for($scope, [$scope.states]);
  $for_content__states($scope);
});
export function $setup($scope) {
  $states($scope, [false, false, false]);
}
function $checkedChange($scope) {
  return _new_checked => {
    $for_content__checked($scope, _new_checked);
  };
}
function $valueChange($scope) {
  return function (value) {
    if ($scope["#LoopKey"] === undefined) {
      throw new Error('LoopKey is undefined');
    }
    const newStates = [...$scope._.states];
    newStates[$scope["#LoopKey"]] = value;
    $states($scope._, newStates);
  };
}
_._resume("__tests__/template.marko_1/checkedChange", $checkedChange);
_._resume("__tests__/template.marko_1/valueChange", $valueChange);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);