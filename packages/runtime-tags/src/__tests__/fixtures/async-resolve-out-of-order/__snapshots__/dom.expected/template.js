export const $template = "a<!>c<!>e";
export const $walks = /* over(1), replace, over(2), replace, over(2) */"b%c%c";
import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $value$await$content2 = /* @__PURE__ */_$.value("value", ($scope, value) => _$.data($scope["#text/0"], value));
const $params3$await$content = /* @__PURE__ */_$.value("$params3", ($scope, $params3) => $value$await$content2($scope, $params3[0]));
const $await_content2 = /* @__PURE__ */_$.createRenderer(" ", /* get, over(1) */" b", 0, $params3$await$content);
const $value$await$content = /* @__PURE__ */_$.value("value", ($scope, value) => _$.data($scope["#text/0"], value));
const $params2$await$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $value$await$content($scope, $params2[0]));
const $await_content = /* @__PURE__ */_$.createRenderer(" ", /* get, over(1) */" b", 0, $params2$await$content);
const $await = /* @__PURE__ */_$.awaitTag("#text/0", $await_content);
const $await2 = /* @__PURE__ */_$.awaitTag("#text/1", $await_content2);
export function $setup($scope) {
  $await($scope, resolveAfter("b", 2));
  $await2($scope, resolveAfter("d", 1));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);