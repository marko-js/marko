export const $template = `${_counter_template}${_counter_template}`;
export const $walks = /* <counter>, <counter> */`/${_counter_walks}&/${_counter_walks}&`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _counter, $input_content as _counter_input_content, $count as _counter_input_count, $countChange2 as _counter_input_countChange, $input_id as _counter_input_id, $template as _counter_template, $walks as _counter_walks } from "./tags/counter.marko";
const $counter_content2__x = /* @__PURE__ */_._closure_get("x", $scope => _._text($scope["#text/0"], $scope._.x));
const $counter_content2__setup = $counter_content2__x;
const $counter_content2 = /* @__PURE__ */_._content("__tests__/template.marko_2_content", " ", /* get, over(1) */" b", $counter_content2__setup);
const $counter_content__x = /* @__PURE__ */_._closure_get("x", $scope => _._text($scope["#text/0"], $scope._.x));
const $counter_content__setup = $counter_content__x;
const $counter_content = /* @__PURE__ */_._content("__tests__/template.marko_1_content", " ", /* get, over(1) */" b", $counter_content__setup);
const $x__closure = /* @__PURE__ */_._closure($counter_content__x, $counter_content2__x);
const $x = /* @__PURE__ */_._let("x/2", $scope => {
  _counter_input_count($scope["#childScope/0"], $scope.x);
  _counter_input_count($scope["#childScope/1"], $scope.x);
  $x__closure($scope);
});
export function $setup($scope) {
  _counter($scope["#childScope/0"]);
  _counter_input_content($scope["#childScope/0"], $counter_content($scope));
  _counter_input_countChange($scope["#childScope/0"], $countChange($scope));
  _counter_input_id($scope["#childScope/0"], "controlled");
  _counter($scope["#childScope/1"]);
  _counter_input_content($scope["#childScope/1"], $counter_content2($scope));
  _counter_input_id($scope["#childScope/1"], "uncontrolled");
  _counter_input_countChange($scope["#childScope/1"]);
  $x($scope, 0);
}
function $countChange($scope) {
  return (_new_x => {
    $x($scope, _new_x);
  });
}
_._resume("__tests__/template.marko_0/countChange", $countChange);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);