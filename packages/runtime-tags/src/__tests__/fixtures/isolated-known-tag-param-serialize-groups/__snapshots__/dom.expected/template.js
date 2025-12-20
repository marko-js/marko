const $Child_content__walks = /* next(1), get, out(1), next(1), get, out(1) */"D lD l",
  $Child_content__template = "<div> </div><div> </div>";
export const $template = `${_child_template}${$Child_content__template}<!>`;
export const $walks = /* <child>, <Child>, over(1) */`/${_child_walks}&/${$Child_content__walks}&b`;
import { $setup as _child, $input_a as _child_input_a, $input_b as _child_input_b, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $Child_content__input_a = ($scope, input_a) => _._text($scope["#text/0"], input_a);
const $Child_content__input_b = ($scope, input_b) => _._text($scope["#text/1"], input_b);
const $Child_content__$params = ($scope, $params2) => $Child_content__input($scope, $params2[0]);
const $Child_content__input = ($scope, input) => {
  $Child_content__input_a($scope, input?.a);
  $Child_content__input_b($scope, input?.b);
};
export function $setup($scope) {
  _child($scope["#childScope/0"]);
}
export const $input_a = ($scope, input_a) => {
  _child_input_a($scope["#childScope/0"], input_a);
  $Child_content__input_a($scope["#childScope/1"], input_a);
};
export const $input_b = ($scope, input_b) => {
  _child_input_b($scope["#childScope/0"], input_b);
  $Child_content__input_b($scope["#childScope/1"], input_b);
};
export const $input = ($scope, input) => {
  $input_a($scope, input.a);
  $input_b($scope, input.b);
};
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);