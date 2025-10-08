const $define_content__walks = /* next(1), get, out(1), next(1), get, out(1) */"D lD l",
  $define_content__template = "<div> </div><div> </div>";
export const $template = `${_child_template}${$define_content__template}<!>`;
export const $walks = /* beginChild, _child_walks, endChild, beginChild, $define_content__walks, endChild, over(1) */`/${_child_walks}&/${$define_content__walks}&b`;
import { $setup as _child, $input_a as _child_input_a, $input_b as _child_input_b, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $define_content__input_a = /* @__PURE__ */_._const("input_a", ($scope, input_a) => _._text($scope["#text/0"], input_a));
const $define_content__input_b = /* @__PURE__ */_._const("input_b", ($scope, input_b) => _._text($scope["#text/1"], input_b));
const $define_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $define_content__input($scope, $params2[0]));
const $define_content__input = /* @__PURE__ */_._const("input", ($scope, input) => {
  $define_content__input_a($scope, input?.a);
  $define_content__input_b($scope, input?.b);
});
export function $setup($scope) {
  _child($scope["#childScope/0"]);
}
export const $input_a = /* @__PURE__ */_._const("input_a", ($scope, input_a) => {
  _child_input_a($scope["#childScope/0"], input_a);
  $define_content__input_a($scope["#childScope/1"], input_a);
});
export const $input_b = /* @__PURE__ */_._const("input_b", ($scope, input_b) => {
  _child_input_b($scope["#childScope/0"], input_b);
  $define_content__input_b($scope["#childScope/1"], input_b);
});
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => {
  $input_a($scope, input.a);
  $input_b($scope, input.b);
});
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);