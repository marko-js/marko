export const $template = "<button>increment</button><p>1 * <!> = <!></p><p>2 * <!> = <!></p><p>3 * <!> = <!></p><p>4 * <!> = <!></p><p>5 * <!> = <!></p>";
export const $walks = /* get, over(1), next(1), over(1), replace, over(2), replace, out(1), next(1), over(1), replace, over(2), replace, out(1), next(1), over(1), replace, over(2), replace, out(1), next(1), over(1), replace, over(2), replace, out(1), next(1), over(1), replace, over(2), replace, out(1) */" bDb%c%lDb%c%lDb%c%lDb%c%lDb%c%l";
import { resolveAfter } from "../../utils/resolve";
const multiply = (multiplier, n) => resolveAfter(multiplier * n, n);
import * as _ from "@marko/runtime-tags/debug/dom";
const $await_content5__result = /* @__PURE__ */_._const("result", ($scope, result) => _._text($scope["#text/0"], result));
const $await_content5__$params = /* @__PURE__ */_._const("$params6", ($scope, $params6) => $await_content5__result($scope, $params6[0]));
const $await_content5 = /* @__PURE__ */_._content_branch(" ", /* get, over(1) */" b", 0, $await_content5__$params);
const $await_content4__result = /* @__PURE__ */_._const("result", ($scope, result) => _._text($scope["#text/0"], result));
const $await_content4__$params = /* @__PURE__ */_._const("$params5", ($scope, $params5) => $await_content4__result($scope, $params5[0]));
const $await_content4 = /* @__PURE__ */_._content_branch(" ", /* get, over(1) */" b", 0, $await_content4__$params);
const $await_content3__result = /* @__PURE__ */_._const("result", ($scope, result) => _._text($scope["#text/0"], result));
const $await_content3__$params = /* @__PURE__ */_._const("$params4", ($scope, $params4) => $await_content3__result($scope, $params4[0]));
const $await_content3 = /* @__PURE__ */_._content_branch(" ", /* get, over(1) */" b", 0, $await_content3__$params);
const $await_content2__result = /* @__PURE__ */_._const("result", ($scope, result) => _._text($scope["#text/0"], result));
const $await_content2__$params = /* @__PURE__ */_._const("$params3", ($scope, $params3) => $await_content2__result($scope, $params3[0]));
const $await_content2 = /* @__PURE__ */_._content_branch(" ", /* get, over(1) */" b", 0, $await_content2__$params);
const $await_content__result = /* @__PURE__ */_._const("result", ($scope, result) => _._text($scope["#text/0"], result));
const $await_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $await_content__result($scope, $params2[0]));
const $await_content = /* @__PURE__ */_._content_branch(" ", /* get, over(1) */" b", 0, $await_content__$params);
const $await = /* @__PURE__ */_._await("#text/2", $await_content);
const $await2 = /* @__PURE__ */_._await("#text/4", $await_content2);
const $await3 = /* @__PURE__ */_._await("#text/6", $await_content3);
const $await4 = /* @__PURE__ */_._await("#text/8", $await_content4);
const $await5 = /* @__PURE__ */_._await("#text/10", $await_content5);
const $n__script = _._script("__tests__/template.marko_0_n", ($scope, {
  n
}) => _._on($scope["#button/0"], "click", function () {
  $n($scope, ++n);
}));
const $n = /* @__PURE__ */_._let("n/11", ($scope, n) => {
  _._text($scope["#text/1"], n);
  _._text($scope["#text/3"], n);
  _._text($scope["#text/5"], n);
  _._text($scope["#text/7"], n);
  _._text($scope["#text/9"], n);
  $await($scope, multiply(1, n));
  $await2($scope, multiply(2, n));
  $await3($scope, multiply(3, n));
  $await4($scope, multiply(4, n));
  $await5($scope, multiply(5, n));
  $n__script($scope);
});
export function $setup($scope) {
  $n($scope, 2);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);