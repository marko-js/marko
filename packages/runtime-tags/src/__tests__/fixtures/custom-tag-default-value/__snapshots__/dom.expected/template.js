export const $template = `${_child_template}${_child_template}`;
export const $walks = /* <child>, <child> */`/${_child_walks}&/${_child_walks}&`;
import { $setup as _child, $input_value as _child_input_value, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $x = /* @__PURE__ */_._let("x/2", $scope => _child_input_value($scope["#childScope/1"], $scope.x));
export function $setup($scope) {
  _child($scope["#childScope/0"]);
  _child_input_value($scope["#childScope/0"], 3);
  _child($scope["#childScope/1"]);
  $x($scope, "y");
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);