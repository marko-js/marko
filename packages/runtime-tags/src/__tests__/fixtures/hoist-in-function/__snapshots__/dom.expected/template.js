export const $template = _child_template;
export const $walks = /* <child> */`/${_child_walks}&`;
import { $setup as _child, $input_fn as _child_input_fn, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $x_getter = _._hoist("x");
const $x = /* @__PURE__ */_._const("x", $scope => _._assert_hoist($scope.x));
const $setup__script = _._script("__tests__/template.marko_0", $scope => $x_getter($scope)());
export function $setup($scope) {
  _child($scope["#childScope/0"]);
  _child_input_fn($scope["#childScope/0"], () => $x_getter($scope)());
  $x($scope, 1);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);