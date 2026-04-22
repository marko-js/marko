export const $template = /*@__PURE__*/(_w0 => `${_w0}<div> </div><div> </div><button> </button>`)(_letGlobal_template);
export const $walks =
/*@__PURE__*/
/* <let-global/var>, next(1), get, out(1), next(1), get, out(1), get, next(1), get, out(1) */
(_w0 => `0${_w0}&D lD l D l`)(_letGlobal_walks);
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _letGlobal, $input_value as _letGlobal_input_value, $template as _letGlobal_template, $walks as _letGlobal_walks } from "./tags/let-global.marko";
const $a__OR__b = /* @__PURE__ */_._or(8, $scope => _._text($scope["#text/5"], `${$scope.a},${$scope.b}`), 1, "#scopeOffset/1");
const $b = /* @__PURE__ */_._let("b/7", $scope => {
  _._text($scope["#text/3"], $scope.b);
  $a__OR__b($scope);
});
const $a = _._var_resume("__tests__/template.marko_0_a/var", /* @__PURE__ */_._const("a", $scope => {
  _._text($scope["#text/2"], $scope.a);
  $b($scope, $scope.a + 1);
  $a__OR__b($scope);
}));
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._on($scope["#button/4"], "click", function () {
  _._var_change($scope["#childScope/0"], 2, "a");
  $b($scope, 2);
}));
export function $setup($scope) {
  _._var($scope, "#childScope/0", $a);
  _letGlobal($scope["#childScope/0"]);
  _letGlobal_input_value($scope["#childScope/0"], "count");
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);