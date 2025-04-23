export const $template = "a<!>e<!>g";
export const $walks = /* over(1), replace, over(2), replace, over(2) */"b%c%c";
import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/dom";
_$.enableCatch();
const $data$await$content2 = /* @__PURE__ */_$.value("data", ($scope, data) => _$.data($scope["#text/0"], data));
const $params3$await$content = /* @__PURE__ */_$.value("$params3", ($scope, $params3) => $data$await$content2($scope, $params3[0]));
const $await_content2 = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, $params3$await$content);
const $data$await$content = /* @__PURE__ */_$.value("data", ($scope, data) => _$.data($scope["#text/0"], data));
const $params2$await$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $data$await$content($scope, $params2[0]));
const $await_content = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, $params2$await$content);
const $placeholder_content = _$.registerContent("__tests__/template.marko_2_renderer", "_A_");
const $await$try$content = /* @__PURE__ */_$.awaitTag("#text/0", $await_content);
const $setup$try$content = $scope => {
  $await$try$content($scope, resolveAfter("c", 2));
};
const $try_content = /* @__PURE__ */_$.createRenderer("b<!>d", /* over(1), replace */"b%", $setup$try$content);
const $try = /* @__PURE__ */_$.createTry("#text/0", $try_content);
const $await = /* @__PURE__ */_$.awaitTag("#text/1", $await_content2);
export function $setup($scope) {
  $try($scope, {
    placeholder: _$.attrTag({
      content: $placeholder_content($scope)
    })
  });
  $await($scope, resolveAfter("f", 1));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);