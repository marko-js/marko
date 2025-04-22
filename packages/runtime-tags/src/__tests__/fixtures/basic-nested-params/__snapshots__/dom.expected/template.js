export const $template = `<button>Inc</button>${_child_template}`;
export const $walks = /* get, over(1), beginChild, _child_walks, endChild */` b/${_child_walks}&`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $content as _child_input_content, $value as _child_input_value, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $inner$child$content = /* @__PURE__ */_$.value("inner", ($scope, inner) => _$.data($scope["#text/1"], inner));
const $outer$child$content = /* @__PURE__ */_$.dynamicClosureRead("outer", ($scope, outer) => _$.data($scope["#text/0"], outer));
const $params3$child$content = /* @__PURE__ */_$.value("$params3", ($scope, $params3) => $inner$child$content($scope, $params3[0]));
const $child_content2 = _$.registerContent("__tests__/template.marko_2_renderer", "<div><!>.<!></div>", /* next(1), replace, over(2), replace */"D%c%", 0, $params3$child$content, $scope => $outer$child$content($scope));
const $y$child$content = /* @__PURE__ */_$.dynamicClosureRead("y", ($scope, y) => _child_input_value($scope["#childScope/0"], y));
const $outer$child$content2_closure = /* @__PURE__ */_$.dynamicClosure($outer$child$content);
const $outer$child$content2 = /* @__PURE__ */_$.value("outer", $outer$child$content2_closure);
const $params2$child$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $outer$child$content2($scope, $params2[0]));
const $setup$child$content = $scope => {
  _child($scope["#childScope/0"]);
  _child_input_content($scope["#childScope/0"], $child_content2($scope));
};
const $child_content = _$.registerContent("__tests__/template.marko_1_renderer", _child_template, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, $setup$child$content, $params2$child$content, $scope => $y$child$content($scope));
const $y_closure = /* @__PURE__ */_$.dynamicClosure($y$child$content);
const $y = /* @__PURE__ */_$.state("y/3", $y_closure);
const $x_effect = _$.effect("__tests__/template.marko_0_x", ($scope, {
  x
}) => _$.on($scope["#button/0"], "click", function () {
  $x($scope, x + 1), x;
}));
const $x = /* @__PURE__ */_$.state("x/2", ($scope, x) => {
  _child_input_value($scope["#childScope/1"], x);
  $x_effect($scope);
});
export function $setup($scope) {
  _child($scope["#childScope/1"]);
  _child_input_content($scope["#childScope/1"], $child_content($scope));
  $x($scope, 1);
  $y($scope, 2);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);