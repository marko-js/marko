export const $template = `${_counter_template}${_counter_template}`;
export const $walks = /* beginChild, _counter_walks, endChild, beginChild, _counter_walks, endChild */`/${_counter_walks}&/${_counter_walks}&`;
const formatNumber = $formatNumber;
const formatNumber2 = $formatNumber2;
import { $setup as _counter, $input as _counter_input, $template as _counter_template, $walks as _counter_walks } from "./tags/counter.marko";
export function $setup($scope) {
  _counter($scope["#childScope/0"]);
  _counter($scope["#childScope/1"]);
  _counter_input($scope["#childScope/0"], {
    format: formatNumber
  });
  _counter_input($scope["#childScope/1"], {
    format: formatNumber2
  });
}
import * as _$ from "@marko/runtime-tags/debug/dom";
function $formatNumber(n) {
  return "$" + n.toFixed(2);
}
function $formatNumber2(n) {
  return "$" + n.toFixed(2);
}
_$.register("__tests__/template.marko_0/formatNumber", $formatNumber);
_$.register("__tests__/template.marko_0/formatNumber2", $formatNumber2);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);