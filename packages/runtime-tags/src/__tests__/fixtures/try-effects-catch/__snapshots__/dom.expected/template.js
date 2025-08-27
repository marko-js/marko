export const $template = "<div></div><!><div></div>";
export const $walks = /* get, over(1), replace, over(1), get, over(1) */" b%b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
_$.enableCatch();
const $err_message$catch$content = /* @__PURE__ */_$.value("err_message", ($scope, err_message) => _$.data($scope["#text/0"], err_message));
const $params2$catch$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $err$catch$content($scope, $params2[0]));
const $err$catch$content = /* @__PURE__ */_$.value("err", ($scope, err) => $err_message$catch$content($scope, err?.message));
const $catch_content = _$.registerContent("__tests__/template.marko_2_renderer", " ", /* get, over(1) */" b", 0, $params2$catch$content);
const $setup$try$content_effect = _$.effect("__tests__/template.marko_1", $scope => ($scope._["#div/0"].textContent = "This shouldn't happen"));
const $setup$try$content = $scope => {
  _$.data($scope["#text/0"], (() => {
    throw new Error("ERROR!");
  })());
  $setup$try$content_effect($scope);
};
const $try_content = /* @__PURE__ */_$.createRenderer(" ", /* get, over(1) */" b", $setup$try$content);
const $try = /* @__PURE__ */_$.createTry("#text/1", $try_content);
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => ($scope["#div/2"].textContent = "This is good"));
export function $setup($scope) {
  $try($scope, {
    catch: _$.attrTag({
      content: $catch_content($scope)
    })
  });
  $setup_effect($scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);