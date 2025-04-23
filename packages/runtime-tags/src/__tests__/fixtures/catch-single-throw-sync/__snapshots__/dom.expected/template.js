export const $template = "a<!>d";
export const $walks = /* over(1), replace, over(2) */"b%c";
import * as _$ from "@marko/runtime-tags/debug/dom";
_$.enableCatch();
const $error_message$catch$content = /* @__PURE__ */_$.value("error_message", ($scope, error_message) => _$.data($scope["#text/0"], error_message));
const $params2$catch$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $error$catch$content($scope, $params2[0]));
const $error$catch$content = /* @__PURE__ */_$.value("error", ($scope, error) => $error_message$catch$content($scope, error?.message));
const $catch_content = _$.registerContent("__tests__/template.marko_2_renderer", " ", /* get */" ", 0, $params2$catch$content);
const $setup$try$content = $scope => {
  _$.data($scope["#text/0"], (() => {
    throw new Error("ERROR!");
  })());
};
const $try_content = /* @__PURE__ */_$.createRenderer("b<!>", /* over(1), replace */"b%", $setup$try$content);
const $try = /* @__PURE__ */_$.createTry("#text/0", $try_content);
export function $setup($scope) {
  $try($scope, {
    catch: _$.attrTag({
      content: $catch_content($scope)
    })
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);