export const $template = `${_counters_template}<div><!> <!></div>`;
export const $walks = /* <2counters>, next(1), replace, over(2), replace, out(1) */`/${_counters_walks}&D%c%l`;
import { $setup as _counters, $input_count as _counters_input_count, $input_count1Change as _counters_input_count1Change, $input_count2 as _counters_input_count2, $input_count2Change as _counters_input_count2Change, $template as _counters_template, $walks as _counters_walks } from "./tags/2counters.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $count = /* @__PURE__ */_._let("count1/3", $scope => {
  _counters_input_count($scope["#childScope/0"], $scope.count1);
  _._text($scope["#text/1"], $scope.count1);
});
const $count2 = /* @__PURE__ */_._let("count2/4", $scope => {
  _counters_input_count2($scope["#childScope/0"], $scope.count2);
  _._text($scope["#text/2"], $scope.count2);
});
export function $setup($scope) {
  _counters($scope["#childScope/0"]);
  _counters_input_count1Change($scope["#childScope/0"], $count1Change($scope));
  _counters_input_count2Change($scope["#childScope/0"], $count2Change($scope));
  $count($scope, 0);
  $count2($scope, 0);
}
function $count2Change($scope) {
  return (_new_count2 => {
    $count2($scope, _new_count2);
  });
}
function $count1Change($scope) {
  return (_new_count1 => {
    $count($scope, _new_count1);
  });
}
_._resume("__tests__/template.marko_0/count2Change", $count2Change);
_._resume("__tests__/template.marko_0/count1Change", $count1Change);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);