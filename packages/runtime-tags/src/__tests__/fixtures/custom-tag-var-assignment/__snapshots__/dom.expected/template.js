export const $template = `${_counter_template}<button class=inc-parent> </button><button class=reset>reset</button>`;
export const $walks = /* beginChildWithVar, _counter_walks, endChild, get, next(1), get, out(1), get, over(1) */`0${_counter_walks}& D l b`;
import { $setup as _counter, $template as _counter_template, $walks as _counter_walks } from "./tags/counter.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $count__script = _._script("__tests__/template.marko_0_count", ($scope, {
  count
}) => _._on($scope["#button/2"], "click", function () {
  _._var_change($scope["#childScope/0"], ++count, "count")
}));
const $count = _._var_resume("__tests__/template.marko_0_count/var", /* @__PURE__ */_._const("count", ($scope, count) => {
  _._text($scope["#text/3"], count);
  $count__script($scope);
}));
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._on($scope["#button/4"], "click", function () {
  _._var_change($scope["#childScope/0"], 0, "count");
}));
export function $setup($scope) {
  _._var($scope, "#childScope/0", $count);
  _counter($scope["#childScope/0"]);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);