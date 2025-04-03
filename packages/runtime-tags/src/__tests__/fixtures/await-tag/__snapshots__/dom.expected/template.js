export const $template = "<div><!><!><!><button>Inc</button></div>";
export const $walks = /* next(1), replace, over(1), replace, over(1), replace, over(1), get, out(1) */"D%b%b%b l";
import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $count$await$content3 = /* @__PURE__ */_$.dynamicClosureRead("count", ($scope, count) => _$.data($scope["#text/1"], count));
const $value$await$content3 = /* @__PURE__ */_$.value("value", ($scope, value) => _$.data($scope["#text/0"], value));
const $params4$await$content = /* @__PURE__ */_$.value("$params4", ($scope, $params4) => $value$await$content3($scope, $params4[0]));
const $await_content3 = /* @__PURE__ */_$.createRenderer("Got: <!> <!>", /* over(1), replace, over(2), replace */"b%c%", 0, $params4$await$content, $scope => $count$await$content3($scope));
const $count$await$content2 = /* @__PURE__ */_$.dynamicClosureRead("count", ($scope, count) => _$.data($scope["#text/1"], count));
const $value$await$content2 = /* @__PURE__ */_$.value("value", ($scope, value) => _$.data($scope["#text/0"], value));
const $params3$await$content = /* @__PURE__ */_$.value("$params3", ($scope, $params3) => $value$await$content2($scope, $params3[0]));
const $await_content2 = /* @__PURE__ */_$.createRenderer("Got: <!> <!>", /* over(1), replace, over(2), replace */"b%c%", 0, $params3$await$content, $scope => $count$await$content2($scope));
const $count$await$content = /* @__PURE__ */_$.dynamicClosureRead("count", ($scope, count) => _$.data($scope["#text/1"], count));
const $value$await$content = /* @__PURE__ */_$.value("value", ($scope, value) => _$.data($scope["#text/0"], value));
const $params2$await$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $value$await$content($scope, $params2[0]));
const $await_content = /* @__PURE__ */_$.createRenderer("Got: <!> <!>", /* over(1), replace, over(2), replace */"b%c%", 0, $params2$await$content, $scope => $count$await$content($scope));
const $await3 = /* @__PURE__ */_$.awaitTag("#text/2", $await_content3);
const $await2 = /* @__PURE__ */_$.awaitTag("#text/1", $await_content2);
const $await = /* @__PURE__ */_$.awaitTag("#text/0", $await_content);
const $count_closure = /* @__PURE__ */_$.dynamicClosure($count$await$content, $count$await$content2, $count$await$content3);
const $count_effect = _$.effect("__tests__/template.marko_0_count", ($scope, {
  count
}) => _$.on($scope["#button/3"], "click", function () {
  $count($scope, count + 1), count;
}));
const $count = /* @__PURE__ */_$.state("count/4", $scope => {
  $count_closure($scope);
  $count_effect($scope);
});
export function $setup($scope) {
  $count($scope, 0);
  $await($scope, Promise.resolve("a"));
  $await2($scope, resolveAfter("b", 2));
  $await3($scope, resolveAfter("c", 1));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);