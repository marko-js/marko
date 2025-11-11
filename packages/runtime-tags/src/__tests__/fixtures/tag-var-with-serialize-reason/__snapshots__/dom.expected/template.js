export const $template = `<button> </button>${_child_template}<!>`;
export const $walks = /* get, next(1), get, out(1), <child/var>, over(1) */` D l0${_child_walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $input_value as _child_input_value, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $count__script = _._script("__tests__/template.marko_0_count", $scope => _._on($scope["#button/0"], "click", function () {
  $count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */_._let("count/4", $scope => {
  _._text($scope["#text/1"], $scope.count);
  _child_input_value($scope["#childScope/2"], $scope.count);
  $count__script($scope);
});
export function $setup($scope) {
  _._var($scope, "#childScope/2", $x);
  _child($scope["#childScope/2"]);
  $count($scope, 1);
}
const $x = _._var_resume("__tests__/template.marko_0_x/var", $scope => {});
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);