const $Child_content__walks = /* next(1), get, out(1), next(1), get, out(1) */"D lD l",
  $Child_content__template = "<div> </div><div> </div>";
export const $template = `${_child_template}${$Child_content__template}<!>`;
export const $walks = /* <child>, <Child>, over(1) */`/${_child_walks}&/${$Child_content__walks}&b`;
import { $setup as _child, $input_a as _child_input_a, $input_b as _child_input_b, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $Child_content__input_a = /* @__PURE__ */_._const("input_a", $scope => _._text($scope["#text/0"], $scope.input_a));
const $Child_content__input_b = /* @__PURE__ */_._const("input_b", $scope => _._text($scope["#text/1"], $scope.input_b));
const $Child_content__$params = /* @__PURE__ */_._const("$params2", $scope => $Child_content__input($scope, $scope.$params2[0]));
const $Child_content__input = /* @__PURE__ */_._const("input", $scope => {
  $Child_content__input_a($scope, $scope.input?.a);
  $Child_content__input_b($scope, $scope.input?.b);
});
export function $setup($scope) {
  _child($scope["#childScope/0"]);
}
export const $input_a = /* @__PURE__ */_._const("input_a", $scope => {
  _child_input_a($scope["#childScope/0"], $scope.input_a);
  $Child_content__input_a($scope["#childScope/1"], $scope.input_a);
});
export const $input_b = /* @__PURE__ */_._const("input_b", $scope => {
  _child_input_b($scope["#childScope/0"], $scope.input_b);
  $Child_content__input_b($scope["#childScope/1"], $scope.input_b);
});
export const $input = /* @__PURE__ */_._const("input", $scope => {
  $input_a($scope, $scope.input.a);
  $input_b($scope, $scope.input.b);
});
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);