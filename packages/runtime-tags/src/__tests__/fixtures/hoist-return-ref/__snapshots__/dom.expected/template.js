export const $template = `${_child_template}${_source_template}`;
export const $walks = /* <child>, <source/var> */`/${_child_walks}&0${_source_walks}&`;
import { $setup as _child, $input as _child_input, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _source, $template as _source_template, $walks as _source_walks } from "./tags/source.marko";
const $x_getter = _._hoist_resume("__tests__/template.marko_0_x/hoist", "x");
export function $setup($scope) {
  _child($scope["#childScope/0"]);
  _child_input($scope["#childScope/0"], {
    y: $x_getter($scope)
  });
  _._var($scope, "#childScope/1", $x);
  _source($scope["#childScope/1"]);
}
const $x = _._var_resume("__tests__/template.marko_0_x/var", /* @__PURE__ */_._const("x", $scope => _._assert_hoist($scope.x)));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);