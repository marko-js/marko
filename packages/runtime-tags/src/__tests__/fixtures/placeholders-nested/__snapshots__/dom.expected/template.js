export const $template = "a<!>h<!>j";
export const $walks = /* over(1), replace, over(2), replace, over(2) */"b%c%c";
import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/dom";
_$.enableCatch();
_$.enableCatch();
const $data$await$content3 = /* @__PURE__ */_$.value("data", ($scope, data) => _$.data($scope["#text/0"], data));
const $params4$await$content = /* @__PURE__ */_$.value("$params4", ($scope, $params4) => $data$await$content3($scope, $params4[0]));
const $await_content3 = /* @__PURE__ */_$.createRenderer(" ", /* get, over(1) */" b", 0, $params4$await$content);
const $data$await$content2 = /* @__PURE__ */_$.value("data", ($scope, data) => _$.data($scope["#text/0"], data));
const $params3$await$content = /* @__PURE__ */_$.value("$params3", ($scope, $params3) => $data$await$content2($scope, $params3[0]));
const $await_content2 = /* @__PURE__ */_$.createRenderer(" ", /* get, over(1) */" b", 0, $params3$await$content);
const $placeholder_content2 = _$.registerContent("__tests__/template.marko_5_renderer", "_A_", /* over(1) */"b");
const $await$try$content2 = /* @__PURE__ */_$.awaitTag("#text/0", $await_content2);
const $setup$try$content2 = $scope => {
  $await$try$content2($scope, resolveAfter("f", 3));
};
const $try_content2 = /* @__PURE__ */_$.createRenderer("e<!>g", /* over(1), replace, over(2) */"b%c", $setup$try$content2);
const $data$await$content = /* @__PURE__ */_$.value("data", ($scope, data) => _$.data($scope["#text/0"], data));
const $params2$await$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $data$await$content($scope, $params2[0]));
const $await_content = /* @__PURE__ */_$.createRenderer(" ", /* get, over(1) */" b", 0, $params2$await$content);
const $placeholder_content = _$.registerContent("__tests__/template.marko_2_renderer", "_B_", /* over(1) */"b");
const $await$try$content = /* @__PURE__ */_$.awaitTag("#text/0", $await_content);
const $try$try$content = /* @__PURE__ */_$.createTry("#text/1", $try_content2);
const $setup$try$content = $scope => {
  $await$try$content($scope, resolveAfter("c", 2));
  $try$try$content($scope, {
    placeholder: _$.attrTag({
      content: $placeholder_content2($scope)
    })
  });
};
const $try_content = /* @__PURE__ */_$.createRenderer("b<!>d<!><!>", /* over(1), replace, over(2), replace, over(2) */"b%c%c", $setup$try$content);
const $try = /* @__PURE__ */_$.createTry("#text/0", $try_content);
const $await = /* @__PURE__ */_$.awaitTag("#text/1", $await_content3);
export function $setup($scope) {
  $try($scope, {
    placeholder: _$.attrTag({
      content: $placeholder_content($scope)
    })
  });
  $await($scope, resolveAfter("i", 1));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);