export const $template = "a<!>d<!>f";
export const $walks = /* over(1), replace, over(2), replace, over(2) */"b%c%c";
import { rejectAfter, resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/dom";
_$.enableCatch();
const $data$await$content2 = /* @__PURE__ */_$.value("data", ($scope, data) => _$.data($scope["#text/0"], data));
const $params4$await$content = /* @__PURE__ */_$.value("$params4", ($scope, $params4) => $data$await$content2($scope, $params4[0]));
const $await_content2 = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, $params4$await$content);
const $data$await$content = /* @__PURE__ */_$.value("data", ($scope, data) => _$.data($scope["#text/0"], data));
const $params3$await$content = /* @__PURE__ */_$.value("$params3", ($scope, $params3) => $data$await$content($scope, $params3[0]));
const $await_content = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, $params3$await$content);
const $error_message$catch$content = /* @__PURE__ */_$.value("error_message", ($scope, error_message) => _$.data($scope["#text/0"], error_message));
const $error$catch$content = /* @__PURE__ */_$.value("error", ($scope, error) => $error_message$catch$content($scope, error?.message));
const $params2$catch$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $error$catch$content($scope, $params2[0]));
const $catch_content = _$.registerContent("__tests__/template.marko_2_renderer", " ", /* get */" ", 0, $params2$catch$content);
const $await$try$content = /* @__PURE__ */_$.awaitTag("#text/0", $await_content);
const $setup$try$content = $scope => {
  $await$try$content($scope, rejectAfter(new Error("ERROR!"), 2));
};
const $try_content = /* @__PURE__ */_$.createRenderer("b<!>c", /* over(1), replace */"b%", $setup$try$content);
const $await = /* @__PURE__ */_$.awaitTag("#text/1", $await_content2);
const $try = /* @__PURE__ */_$.createTry("#text/0", $try_content);
export function $setup($scope) {
  $try($scope, {
    catch: _$.attrTag({
      content: $catch_content($scope)
    })
  });
  $await($scope, resolveAfter("e", 1));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);