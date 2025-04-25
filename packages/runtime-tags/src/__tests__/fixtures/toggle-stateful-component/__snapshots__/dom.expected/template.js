export const $template = "<div></div>";
export const $walks = /* get, over(1) */" b";
import { $setup as _counter, $input_onCount as _counter_input_onCount, $template as _counter_template, $walks as _counter_walks } from "./tags/counter.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $setup$if$content = $scope => {
  _counter($scope["#childScope/0"]);
  $onCount$if$content._($scope);
};
const $onCount$if$content = /* @__PURE__ */_$.conditionalClosure("onCount", "#div/0", 0, ($scope, onCount) => _counter_input_onCount($scope["#childScope/0"], onCount));
const $if_content = /* @__PURE__ */_$.createRenderer(`<div>${_counter_template}</div>`, /* next(1), beginChild, _counter_walks, endChild */`D/${_counter_walks}&`, $setup$if$content);
const $if = /* @__PURE__ */_$.conditional("#div/0", $if_content);
const $show = /* @__PURE__ */_$.state("show/1", ($scope, show) => $if($scope, show ? 0 : 1));
const $onCount2 = /* @__PURE__ */_$.value("onCount");
export function $setup($scope) {
  $show($scope, true);
  $onCount2($scope, $onCount($scope));
}
function $onCount($scope) {
  return function (count) {
    $show($scope, count < 1);
  };
}
_$.register("__tests__/template.marko_0/onCount", $onCount);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);