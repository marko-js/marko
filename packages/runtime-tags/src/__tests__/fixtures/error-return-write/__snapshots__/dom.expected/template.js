export const $template = _child_template;
export const $walks = /* <child/var> */`0${_child_walks}&`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $x = _._var_resume("__tests__/template.marko_0_x/var", $scope => {});
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._var_change($scope["#childScope/0"], 2, "x"));
export function $setup($scope) {
  _._var($scope, "#childScope/0", $x);
  _child($scope["#childScope/0"]);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);