export const $template = "<input type=radio><!><input type=radio><span> </span><button>Toggle</button>";
export const $walks = /* get, over(1), replace, over(1), get, over(1), next(1), get, out(1), get, over(1) */" b%b bD l b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__checkedValue__OR__checkedValueChange = /* @__PURE__ */_._or(1, $scope => _._attr_input_checkedValue($scope, "#input/0", $scope._.checkedValue, $scope._.$checkedValueChange, "b"));
const $if_content__checkedValue = /* @__PURE__ */_._if_closure("#text/1", 0, $if_content__checkedValue__OR__checkedValueChange);
const $if_content__setup__script = _._script("__tests__/template.marko_1", $scope => _._attr_input_checkedValue_script($scope, "#input/0"));
const $if_content__setup = $scope => {
  $if_content__checkedValue._($scope);
  $if_content__$checkedValueChange._($scope);
  $if_content__setup__script($scope);
};
const $if_content__$checkedValueChange = /* @__PURE__ */_._if_closure("#text/1", 0, $if_content__checkedValue__OR__checkedValueChange);
const $if = /* @__PURE__ */_._if("#text/1", "<input type=radio>", /* get, over(1) */" b", $if_content__setup);
const $show__script = _._script("__tests__/template.marko_0_show", $scope => _._on($scope["#button/4"], "click", function () {
  $show($scope, !$scope.show);
}));
const $show = /* @__PURE__ */_._let("show/5", $scope => {
  $if($scope, $scope.show ? 0 : 1);
  $show__script($scope);
});
const $checkedValue__OR__checkedValueChange = /* @__PURE__ */_._or(8, $scope => {
  _._attr_input_checkedValue($scope, "#input/0", $scope.checkedValue, $scope.$checkedValueChange, "a");
  _._attr_input_checkedValue($scope, "#input/2", $scope.checkedValue, $scope.$checkedValueChange, "c");
});
const $checkedValue = /* @__PURE__ */_._let("checkedValue/6", $scope => {
  _._text($scope["#text/3"], $scope.checkedValue);
  $checkedValue__OR__checkedValueChange($scope);
  $if_content__checkedValue($scope);
});
const $checkedValueChange3 = /* @__PURE__ */_._const("$checkedValueChange", $checkedValue__OR__checkedValueChange);
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  _._attr_input_checkedValue_script($scope, "#input/0");
  _._attr_input_checkedValue_script($scope, "#input/2");
});
export function $setup($scope) {
  $show($scope, true);
  $checkedValue($scope, "a");
  $checkedValueChange3($scope, $checkedValueChange2($scope));
  $setup__script($scope);
}
function $checkedValueChange2($scope) {
  return _new_checkedValue => {
    $checkedValue($scope, _new_checkedValue);
  };
}
_._resume("__tests__/template.marko_0/checkedValueChange2", $checkedValueChange2);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);