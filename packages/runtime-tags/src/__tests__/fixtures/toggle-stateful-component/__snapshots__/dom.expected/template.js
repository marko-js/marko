export const $template = "<div></div>";
export const $walks = /* get, over(1) */" b";
import { $setup as _counter, $input_onCount as _counter_input_onCount, $template as _counter_template, $walks as _counter_walks } from "./tags/counter.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__onCount = /* @__PURE__ */_._if_closure("#div/0", 0, $scope => _counter_input_onCount($scope["#childScope/0"], $scope._.onCount));
const $if_content__setup = $scope => {
  $if_content__onCount._($scope);
  _counter($scope["#childScope/0"]);
};
const $if = /* @__PURE__ */_._if("#div/0", `<div>${_counter_template}</div>`, /* next(1), <counter>, out(1) */`D/${_counter_walks}&l`, $if_content__setup);
const $show = /* @__PURE__ */_._let("show/1", $scope => $if($scope, $scope.show ? 0 : 1));
const $onCount2 = /* @__PURE__ */_._const("onCount");
export function $setup($scope) {
  $show($scope, true);
  $onCount2($scope, $onCount($scope));
}
function $onCount($scope) {
  return function (count) {
    $show($scope, count < 1);
  };
}
_._resume("__tests__/template.marko_0/onCount", $onCount);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);