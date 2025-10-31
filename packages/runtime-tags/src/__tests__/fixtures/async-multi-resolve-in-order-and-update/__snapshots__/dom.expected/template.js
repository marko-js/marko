export const $template = "<button>increment</button><p>1 * <!> = <!></p><p>2 * <!> = <!></p><p>3 * <!> = <!></p><p>4 * <!> = <!></p><p>5 * <!> = <!></p>";
export const $walks = /* get, over(1), next(1), over(1), replace, over(2), replace, out(1), next(1), over(1), replace, over(2), replace, out(1), next(1), over(1), replace, over(2), replace, out(1), next(1), over(1), replace, over(2), replace, out(1), next(1), over(1), replace, over(2), replace, out(1) */" bDb%c%lDb%c%lDb%c%lDb%c%lDb%c%l";
import { resolveAfter } from "../../utils/resolve";
const multiply = (multiplier, n) => resolveAfter(multiplier * n, n);
import * as _ from "@marko/runtime-tags/debug/dom";
const $await_content5__result = /* @__PURE__ */_._const("result", $scope => _._text($scope["#text/0"], $scope.result));
const $await_content5__$params = /* @__PURE__ */_._const("$params6", $scope => $await_content5__result($scope, $scope.$params6[0]));
const $await_content5 = /* @__PURE__ */_._content_branch(" ", /* get, over(1) */" b", 0, $await_content5__$params);
const $await_content4__result = /* @__PURE__ */_._const("result", $scope => _._text($scope["#text/0"], $scope.result));
const $await_content4__$params = /* @__PURE__ */_._const("$params5", $scope => $await_content4__result($scope, $scope.$params5[0]));
const $await_content4 = /* @__PURE__ */_._content_branch(" ", /* get, over(1) */" b", 0, $await_content4__$params);
const $await_content3__result = /* @__PURE__ */_._const("result", $scope => _._text($scope["#text/0"], $scope.result));
const $await_content3__$params = /* @__PURE__ */_._const("$params4", $scope => $await_content3__result($scope, $scope.$params4[0]));
const $await_content3 = /* @__PURE__ */_._content_branch(" ", /* get, over(1) */" b", 0, $await_content3__$params);
const $await_content2__result = /* @__PURE__ */_._const("result", $scope => _._text($scope["#text/0"], $scope.result));
const $await_content2__$params = /* @__PURE__ */_._const("$params3", $scope => $await_content2__result($scope, $scope.$params3[0]));
const $await_content2 = /* @__PURE__ */_._content_branch(" ", /* get, over(1) */" b", 0, $await_content2__$params);
const $await_content__result = /* @__PURE__ */_._const("result", $scope => _._text($scope["#text/0"], $scope.result));
const $await_content__$params = /* @__PURE__ */_._const("$params2", $scope => $await_content__result($scope, $scope.$params2[0]));
const $await_content = /* @__PURE__ */_._content_branch(" ", /* get, over(1) */" b", 0, $await_content__$params);
const $await = /* @__PURE__ */_._await("#text/2", $await_content);
const $await2 = /* @__PURE__ */_._await("#text/4", $await_content2);
const $await3 = /* @__PURE__ */_._await("#text/6", $await_content3);
const $await4 = /* @__PURE__ */_._await("#text/8", $await_content4);
const $await5 = /* @__PURE__ */_._await("#text/10", $await_content5);
const $n__script = _._script("__tests__/template.marko_0_n", $scope => _._on($scope["#button/0"], "click", function () {
  $n($scope, $scope.n + 1);
}));
const $n = /* @__PURE__ */_._let("n/11", $scope => {
  _._text($scope["#text/1"], $scope.n);
  _._text($scope["#text/3"], $scope.n);
  _._text($scope["#text/5"], $scope.n);
  _._text($scope["#text/7"], $scope.n);
  _._text($scope["#text/9"], $scope.n);
  $await($scope, multiply(1, $scope.n));
  $await2($scope, multiply(2, $scope.n));
  $await3($scope, multiply(3, $scope.n));
  $await4($scope, multiply(4, $scope.n));
  $await5($scope, multiply(5, $scope.n));
  $n__script($scope);
});
export function $setup($scope) {
  $n($scope, 2);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);