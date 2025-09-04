export const $template = "<div></div>";
export const $walks = /* get, over(1) */" b";
import { $setup as _counter, $input_onCount as _counter_input_onCount, $template as _counter_template, $walks as _counter_walks } from "./tags/counter.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__setup = $scope => {
  _counter($scope["#childScope/0"]);
  $if_content__onCount._($scope);
};
const $if_content__onCount = /* @__PURE__ */_._if_closure("onCount", "#div/0", 0, ($scope, onCount) => _counter_input_onCount($scope["#childScope/0"], onCount));
const $if_content = /* @__PURE__ */_._content_branch(`<div>${_counter_template}</div>`, /* next(1), beginChild, _counter_walks, endChild, out(1) */`D/${_counter_walks}&l`, $if_content__setup);
const $if = /* @__PURE__ */_._if("#div/0", $if_content);
const $show = /* @__PURE__ */_._let("show/1", ($scope, show) => $if($scope, show ? 0 : 1));
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