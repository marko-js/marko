export const $template = `${_checkbox_template}${_checkbox_template}${_checkbox_template}<span> </span>`;
export const $walks = /* <checkbox>, <checkbox>, <checkbox>, next(1), get, out(1) */`/${_checkbox_walks}&/${_checkbox_walks}&/${_checkbox_walks}&D l`;
import { $setup as _checkbox, $input as _checkbox_input, $template as _checkbox_template, $walks as _checkbox_walks } from "./tags/checkbox.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $checkedValue__OR__checkedValueChange = /* @__PURE__ */_._or(6, $scope => {
  _checkbox_input($scope["#childScope/0"], {
    checkedValue: $scope.checkedValue,
    checkedValueChange: $scope.$checkedValueChange,
    value: "a"
  });
  _checkbox_input($scope["#childScope/1"], {
    checkedValue: $scope.checkedValue,
    checkedValueChange: $scope.$checkedValueChange,
    value: "b"
  });
  _checkbox_input($scope["#childScope/2"], {
    checkedValue: $scope.checkedValue,
    checkedValueChange: $scope.$checkedValueChange,
    value: "c"
  });
});
const $checkedValue = /* @__PURE__ */_._let("checkedValue/4", $scope => {
  _._text($scope["#text/3"], $scope.checkedValue);
  $checkedValue__OR__checkedValueChange($scope);
});
const $checkedValueChange3 = /* @__PURE__ */_._const("$checkedValueChange", $checkedValue__OR__checkedValueChange);
export function $setup($scope) {
  _checkbox($scope["#childScope/0"]);
  _checkbox($scope["#childScope/1"]);
  _checkbox($scope["#childScope/2"]);
  $checkedValue($scope, ["a", "b"]);
  $checkedValueChange3($scope, $checkedValueChange2($scope));
}
function $checkedValueChange2($scope) {
  return (_new_checkedValue => {
    $checkedValue($scope, _new_checkedValue);
  });
}
_._resume("__tests__/template.marko_0/checkedValueChange2", $checkedValueChange2);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);