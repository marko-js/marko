export const $template = /*@__PURE__*/(_w0 => `${_w0}<div> </div>`)(_child_template);
export const $walks =
/*@__PURE__*/
/* <child/var>, next(1), get, out(1) */
(_w0 => `0${_w0}&D l`)(_child_walks);
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $input_extra as _child_input_extra, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $message = ($scope, message) => _._text($scope["#text/2"], message);
const $name__OR__data = /* @__PURE__ */_._or(5, $scope => $message($scope, `${$scope.name} ${$scope.data}`), 1, "#scopeOffset/1");
const $name = /* @__PURE__ */_._let("name/3", $name__OR__data);
export function $setup($scope) {
  _._var($scope, "#childScope/0", $data);
  _child($scope["#childScope/0"]);
  _child_input_extra($scope["#childScope/0"], 1);
  $name($scope, "Marko");
}
const $data = _._var_resume("__tests__/template.marko_0_data/var", /* @__PURE__ */_._const("data", $name__OR__data));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);