export const $template = `${_counters_template}<div><!> <!></div>`;
export const $walks = /* beginChild, _counters_walks, endChild, next(1), replace, over(2), replace, out(1) */`/${_counters_walks}&D%c%l`;
import { $setup as _counters, $input_count as _counters_input_count, $input_count1Change as _counters_input_count1Change, $input_count2 as _counters_input_count2, $input_count2Change as _counters_input_count2Change, $template as _counters_template, $walks as _counters_walks } from "./tags/2counters.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $count = /* @__PURE__ */_$.state("count1/3", ($scope, count1) => {
  _counters_input_count($scope["#childScope/0"], count1);
  _$.data($scope["#text/1"], count1);
});
const $count2 = /* @__PURE__ */_$.state("count2/4", ($scope, count2) => {
  _counters_input_count2($scope["#childScope/0"], count2);
  _$.data($scope["#text/2"], count2);
});
export function $setup($scope) {
  _counters($scope["#childScope/0"]);
  _counters_input_count1Change($scope["#childScope/0"], $count1Change($scope));
  _counters_input_count2Change($scope["#childScope/0"], $count2Change($scope));
  $count($scope, 0);
  $count2($scope, 0);
}
function $count2Change($scope) {
  return _new_count2 => {
    $count2($scope, _new_count2);
  };
}
function $count1Change($scope) {
  return _new_count1 => {
    $count($scope, _new_count1);
  };
}
_$.register("__tests__/template.marko_0/count2Change", $count2Change);
_$.register("__tests__/template.marko_0/count1Change", $count1Change);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);