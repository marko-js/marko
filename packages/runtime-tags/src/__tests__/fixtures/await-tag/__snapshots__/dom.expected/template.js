export const $template = "<div><!><!><!><button>Inc</button></div>";
export const $walks = /* next(1), replace, over(1), replace, over(1), replace, over(1), get, out(1) */"D%b%b%b l";
import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/dom";
const $await_content3__count = /* @__PURE__ */_._closure_get("count", $scope => _._text($scope["#text/1"], $scope._.count));
const $await_content3__setup = $await_content3__count;
const $await_content3__value = ($scope, value) => _._text($scope["#text/0"], value);
const $await_content3__$params = ($scope, $params4) => $await_content3__value($scope, $params4[0]);
const $await_content2__count = /* @__PURE__ */_._closure_get("count", $scope => _._text($scope["#text/1"], $scope._.count));
const $await_content2__setup = $await_content2__count;
const $await_content2__value = ($scope, value) => _._text($scope["#text/0"], value);
const $await_content2__$params = ($scope, $params3) => $await_content2__value($scope, $params3[0]);
const $await_content__count = /* @__PURE__ */_._closure_get("count", $scope => _._text($scope["#text/1"], $scope._.count));
const $await_content__setup = $await_content__count;
const $await_content__value = ($scope, value) => _._text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $count__closure = /* @__PURE__ */_._closure($await_content__count, $await_content2__count, $await_content3__count);
const $count__script = _._script("__tests__/template.marko_0_count", $scope => _._on($scope["#button/3"], "click", function () {
  $count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */_._let("count/4", $scope => {
  $count__closure($scope);
  $count__script($scope);
});
const $await_content = /* @__PURE__ */_._await_content("#text/0", "Got: <!> <!>", /* over(1), replace, over(2), replace, over(1) */"b%c%b", $await_content__setup);
const $await_promise = /* @__PURE__ */_._await_promise("#text/0", $await_content__$params);
const $await_content2 = /* @__PURE__ */_._await_content("#text/1", "Got: <!> <!>", /* over(1), replace, over(2), replace, over(1) */"b%c%b", $await_content2__setup);
const $await_promise2 = /* @__PURE__ */_._await_promise("#text/1", $await_content2__$params);
const $await_content3 = /* @__PURE__ */_._await_content("#text/2", "Got: <!> <!>", /* over(1), replace, over(2), replace, over(1) */"b%c%b", $await_content3__setup);
const $await_promise3 = /* @__PURE__ */_._await_promise("#text/2", $await_content3__$params);
export function $setup($scope) {
  $await_content($scope);
  $await_content2($scope);
  $await_content3($scope);
  $count($scope, 0);
  $await_promise($scope, Promise.resolve("a"));
  $await_promise2($scope, resolveAfter("b", 2));
  $await_promise3($scope, resolveAfter("c", 1));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);