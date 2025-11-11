export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
_._enable_catch();
const $try_content__value = /* @__PURE__ */_._closure_get("value", $scope => _._text($scope["#text/0"], $scope._.value));
const $try_content__setup = $try_content__value;
const $value = /* @__PURE__ */_._const("value");
const $try = /* @__PURE__ */_._try("#text/0", " ", /* get, over(1) */" b", $try_content__setup);
export function $setup($scope) {
  $value($scope, "Hello");
  $try($scope, {});
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);