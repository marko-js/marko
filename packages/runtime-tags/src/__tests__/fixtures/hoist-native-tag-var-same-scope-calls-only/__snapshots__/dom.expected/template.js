export const $template = `${_child_template}<div></div>${_child_template}`;
export const $walks = /* <child>, get, over(1), <child> */`/${_child_walks}& b/${_child_walks}&`;
import { $setup as _child, $input as _child_input, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $setup__script = _._script("__tests__/template.marko_0", $scope => (_._el_read($scope["#div/1"]).innerHTML = "works"));
export function $setup($scope) {
  _child($scope["#childScope/0"]);
  _child_input($scope["#childScope/0"], {
    action: $action($scope)
  });
  _child($scope["#childScope/2"]);
  _child_input($scope["#childScope/2"], {
    action: $action2($scope)
  });
  $setup__script($scope);
}
function $action2($scope) {
  return function () {
    _._el_read($scope["#div/1"]).classList.add("child2");
  };
}
function $action($scope) {
  return function () {
    _._el_read($scope["#div/1"]).classList.add("child1");
  };
}
_._resume("__tests__/template.marko_0/action2", $action2);
_._resume("__tests__/template.marko_0/action", $action);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);