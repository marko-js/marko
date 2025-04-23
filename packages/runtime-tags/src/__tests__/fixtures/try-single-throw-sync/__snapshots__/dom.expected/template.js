export const $template = "Before<!>After";
export const $walks = /* over(1), replace, over(2) */"b%c";
import * as _$ from "@marko/runtime-tags/debug/dom";
_$.enableCatch();
const $err_message$catch$content = /* @__PURE__ */_$.value("err_message", ($scope, err_message) => _$.data($scope["#text/0"], err_message));
const $params2$catch$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $err$catch$content($scope, $params2[0]));
const $err$catch$content = /* @__PURE__ */_$.value("err", ($scope, err) => $err_message$catch$content($scope, err?.message));
const $catch_content = _$.registerContent("__tests__/template.marko_2_renderer", " ", /* get */" ", 0, $params2$catch$content);
const $setup$try$content = $scope => {
  _$.data($scope["#text/0"], (() => {
    throw new Error("ERROR!");
  })());
};
const $try_content = /* @__PURE__ */_$.createRenderer("Inside<!>", /* over(1), replace */"b%", $setup$try$content);
const $try = /* @__PURE__ */_$.createTry("#text/0", $try_content);
export function $setup($scope) {
  $try($scope, {
    catch: _$.attrTag({
      content: $catch_content($scope)
    })
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);