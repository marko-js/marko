export const $template = `${_thing_template}${_child_template}`;
export const $walks = /* <thing>, <child/var> */`/${_thing_walks}&0${_child_walks}&`;
import { $setup as _thing, $input_value as _thing_input_value, $template as _thing_template, $walks as _thing_walks } from "./tags/thing.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $get$hoisted_setHtml = _._resume("__tests__/template.marko_0_$hoisted_setHtml/hoist", _._hoist("setHtml"));
const $hoisted_setHtml2 = ($scope, $hoisted_setHtml) => _thing_input_value($scope["#childScope/0"], $hoisted_setHtml);
export function $setup($scope) {
  _thing($scope["#childScope/0"]);
  _._var($scope, "#childScope/1", $setHtml);
  _child($scope["#childScope/1"]);
  $hoisted_setHtml2($scope, $get$hoisted_setHtml($scope));
}
const $setHtml = _._var_resume("__tests__/template.marko_0_setHtml/var", /* @__PURE__ */_._const("setHtml", $scope => _._assert_hoist($scope.setHtml)));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);