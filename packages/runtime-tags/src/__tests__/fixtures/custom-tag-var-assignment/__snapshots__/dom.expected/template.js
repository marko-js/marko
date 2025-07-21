export const $template = `${_counter_template}<button class=inc-parent> </button><button class=reset>reset</button>`;
export const $walks = /* beginChildWithVar, _counter_walks, endChild, get, next(1), get, out(1), get, over(1) */`0${_counter_walks}& D l b`;
import { $setup as _counter, $template as _counter_template, $walks as _counter_walks } from "./tags/counter.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $count_effect = _$.effect("__tests__/template.marko_0_count", ($scope, {
  count
}) => _$.on($scope["#button/2"], "click", function () {
  _$.tagVarSignalChange($scope["#childScope/0"], ++count)
}));
const $count = _$.registerBoundSignal("__tests__/template.marko_0_count/var", /* @__PURE__ */_$.value("count", ($scope, count) => {
  _$.data($scope["#text/3"], count);
  $count_effect($scope);
}));
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => _$.on($scope["#button/4"], "click", function () {
  _$.tagVarSignalChange($scope["#childScope/0"], 0);
}));
export function $setup($scope) {
  _$.setTagVar($scope, "#childScope/0", $count);
  _counter($scope["#childScope/0"]);
  $setup_effect($scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);