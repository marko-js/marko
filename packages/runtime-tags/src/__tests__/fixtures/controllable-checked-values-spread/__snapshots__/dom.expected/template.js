export const $template = `${_checkbox_template}${_checkbox_template}${_checkbox_template}<span> </span>`;
export const $walks = /* beginChild, _checkbox_walks, endChild, beginChild, _checkbox_walks, endChild, beginChild, _checkbox_walks, endChild, next(1), get, out(1) */`/${_checkbox_walks}&/${_checkbox_walks}&/${_checkbox_walks}&D l`;
import { $setup as _checkbox, $input as _checkbox_input, $template as _checkbox_template, $walks as _checkbox_walks } from "./tags/checkbox.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $expr_checkedValue_$checkedValueChange = /* @__PURE__ */_$.intersection(6, $scope => {
  const {
    checkedValue,
    $checkedValueChange
  } = $scope;
  _checkbox_input($scope["#childScope/0"], {
    checkedValue: checkedValue,
    checkedValueChange: $checkedValueChange,
    value: "a"
  });
  _checkbox_input($scope["#childScope/1"], {
    checkedValue: checkedValue,
    checkedValueChange: $checkedValueChange,
    value: "b"
  });
  _checkbox_input($scope["#childScope/2"], {
    checkedValue: checkedValue,
    checkedValueChange: $checkedValueChange,
    value: "c"
  });
});
const $checkedValueChange3 = /* @__PURE__ */_$.value("$checkedValueChange", $expr_checkedValue_$checkedValueChange);
const $checkedValue = /* @__PURE__ */_$.state("checkedValue/4", ($scope, checkedValue) => {
  _$.data($scope["#text/3"], checkedValue);
  $expr_checkedValue_$checkedValueChange($scope);
});
export function $setup($scope) {
  _checkbox($scope["#childScope/0"]);
  _checkbox($scope["#childScope/1"]);
  _checkbox($scope["#childScope/2"]);
  $checkedValue($scope, ["a", "b"]);
  $checkedValueChange3($scope, $checkedValueChange2($scope));
}
function $checkedValueChange2($scope) {
  return _new_checkedValue => {
    $checkedValue($scope, _new_checkedValue);
  };
}
_$.register("__tests__/template.marko_0/checkedValueChange2", $checkedValueChange2);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);