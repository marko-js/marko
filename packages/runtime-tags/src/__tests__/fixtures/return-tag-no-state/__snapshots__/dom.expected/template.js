export const $template = `${_child_template}<div>parent <!></div>`;
export const $walks = /* <child/var>, next(1), over(1), replace, out(1) */`0${_child_walks}&Db%l`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $value = _._var_resume("__tests__/template.marko_0_value/var", /* @__PURE__ */_._const("value", $scope => _._text($scope["#text/2"], $scope.value)));
export function $setup($scope) {
  _._var($scope, "#childScope/0", $value);
  _child($scope["#childScope/0"]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);