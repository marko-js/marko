export const $template = `${_child_template}${_source_template}`;
export const $walks = /* <child>, <source/var> */`/${_child_walks}&0${_source_walks}&`;
import { $setup as _child, $input as _child_input, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _source, $template as _source_template, $walks as _source_walks } from "./tags/source.marko";
const $api_getter = _._hoist("api");
const $setup__script = _._script("__tests__/template.marko_0", $scope => $api_getter($scope)().setHtml("works"));
export function $setup($scope) {
  _child($scope["#childScope/0"]);
  _child_input($scope["#childScope/0"], {
    action: $action($scope)
  });
  _._var($scope, "#childScope/1", $api);
  _source($scope["#childScope/1"]);
  $setup__script($scope);
}
const $api = _._var_resume("__tests__/template.marko_0_api/var", /* @__PURE__ */_._const("api", $scope => _._assert_hoist($scope.api)));
function $action($scope) {
  return function () {
    $api_getter($scope)().addClass("child");
  };
}
_._resume("__tests__/template.marko_0/action", $action);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);