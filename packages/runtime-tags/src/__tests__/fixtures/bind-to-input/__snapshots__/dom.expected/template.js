export const $template = `${_counter_template}${_counter_template}`;
export const $walks = /* beginChild, _counter_walks, endChild, beginChild, _counter_walks, endChild */`/${_counter_walks}&/${_counter_walks}&`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $setup as _counter, $input_content as _counter_input_content, $count as _counter_input_count, $countChange2 as _counter_input_countChange, $input_id as _counter_input_id, $template as _counter_template, $walks as _counter_walks } from "./tags/counter.marko";
const $x$counter$content2 = /* @__PURE__ */_$.dynamicClosureRead("x", ($scope, x) => _$.data($scope["#text/0"], x));
const $setup$counter$content = $x$counter$content2;
const $counter_content2 = /* @__PURE__ */_$.createContent("__tests__/template.marko_2_renderer", " ", /* get, over(1) */" b", $setup$counter$content);
const $x$counter$content = /* @__PURE__ */_$.dynamicClosureRead("x", ($scope, x) => _$.data($scope["#text/0"], x));
const $setup$counter$content2 = $x$counter$content;
const $counter_content = /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", " ", /* get, over(1) */" b", $setup$counter$content2);
const $x_closure = /* @__PURE__ */_$.dynamicClosure($x$counter$content, $x$counter$content2);
const $x = /* @__PURE__ */_$.state("x/2", ($scope, x) => {
  _counter_input_count($scope["#childScope/0"], x);
  _counter_input_count($scope["#childScope/1"], x);
  $x_closure($scope);
});
export function $setup($scope) {
  _counter($scope["#childScope/0"]);
  _counter_input_content($scope["#childScope/0"], $counter_content($scope));
  _counter_input_countChange($scope["#childScope/0"], $countChange($scope));
  _counter_input_id($scope["#childScope/0"], "controlled");
  _counter($scope["#childScope/1"]);
  _counter_input_content($scope["#childScope/1"], $counter_content2($scope));
  _counter_input_id($scope["#childScope/1"], "uncontrolled");
  _counter_input_countChange($scope["#childScope/1"], void 0);
  $x($scope, 0);
}
function $countChange($scope) {
  return _new_x => {
    $x($scope, _new_x);
  };
}
_$.register("__tests__/template.marko_0/countChange", $countChange);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);