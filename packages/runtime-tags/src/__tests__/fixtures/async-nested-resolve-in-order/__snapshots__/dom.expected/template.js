export const $template = "a<!>g<!>m";
export const $walks = /* over(1), replace, over(2), replace, over(2) */"b%c%c";
import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $result6$await$content = /* @__PURE__ */_$.value("result6", ($scope, result6) => _$.data($scope["#text/0"], result6));
const $params7$await$content = /* @__PURE__ */_$.value("$params7", ($scope, $params7) => $result6$await$content($scope, $params7[0]));
const $await_content6 = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, $params7$await$content);
const $result5$await$content = /* @__PURE__ */_$.value("result5", ($scope, result5) => _$.data($scope["#text/0"], result5));
const $await$await$content3 = /* @__PURE__ */_$.awaitTag("#text/1", $await_content6);
const $setup$await$content3 = $scope => {
  $await$await$content3($scope, resolveAfter("j", 1));
};
const $params6$await$content = /* @__PURE__ */_$.value("$params6", ($scope, $params6) => $result5$await$content($scope, $params6[0]));
const $await_content5 = /* @__PURE__ */_$.createRenderer("<!><!>k", /* replace, over(1), replace */"%b%", $setup$await$content3, $params6$await$content);
const $result4$await$content = /* @__PURE__ */_$.value("result4", ($scope, result4) => _$.data($scope["#text/0"], result4));
const $await$await$content4 = /* @__PURE__ */_$.awaitTag("#text/1", $await_content5);
const $setup$await$content4 = $scope => {
  $await$await$content4($scope, resolveAfter("i", 1));
};
const $params5$await$content = /* @__PURE__ */_$.value("$params5", ($scope, $params5) => $result4$await$content($scope, $params5[0]));
const $await_content4 = /* @__PURE__ */_$.createRenderer("<!><!>l", /* replace, over(1), replace */"%b%", $setup$await$content4, $params5$await$content);
const $result3$await$content = /* @__PURE__ */_$.value("result3", ($scope, result3) => _$.data($scope["#text/0"], result3));
const $params4$await$content = /* @__PURE__ */_$.value("$params4", ($scope, $params4) => $result3$await$content($scope, $params4[0]));
const $await_content3 = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, $params4$await$content);
const $result2$await$content = /* @__PURE__ */_$.value("result2", ($scope, result2) => _$.data($scope["#text/0"], result2));
const $await$await$content = /* @__PURE__ */_$.awaitTag("#text/1", $await_content3);
const $setup$await$content = $scope => {
  $await$await$content($scope, resolveAfter("d", 1));
};
const $params3$await$content = /* @__PURE__ */_$.value("$params3", ($scope, $params3) => $result2$await$content($scope, $params3[0]));
const $await_content2 = /* @__PURE__ */_$.createRenderer("<!><!>e", /* replace, over(1), replace */"%b%", $setup$await$content, $params3$await$content);
const $result1$await$content = /* @__PURE__ */_$.value("result1", ($scope, result1) => _$.data($scope["#text/0"], result1));
const $await$await$content2 = /* @__PURE__ */_$.awaitTag("#text/1", $await_content2);
const $setup$await$content2 = $scope => {
  $await$await$content2($scope, resolveAfter("c", 1));
};
const $params2$await$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $result1$await$content($scope, $params2[0]));
const $await_content = /* @__PURE__ */_$.createRenderer("<!><!>f", /* replace, over(1), replace */"%b%", $setup$await$content2, $params2$await$content);
const $await = /* @__PURE__ */_$.awaitTag("#text/0", $await_content);
const $await2 = /* @__PURE__ */_$.awaitTag("#text/1", $await_content4);
export function $setup($scope) {
  $await($scope, resolveAfter("b", 1));
  $await2($scope, resolveAfter("h", 1));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);