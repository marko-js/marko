export const $template = "<!><!><div> </div>";
export const $walks = /* over(1), replace, over(1), next(1), get, out(1) */"b%bD l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $x_getter = _._hoist("x", "BranchScopes:#text/0");
const $if_content__x = /* @__PURE__ */_._const("x", $scope => _._assert_hoist($scope.x));
const $if_content__setup = $scope => $if_content__x($scope, 1);
const $if = /* @__PURE__ */_._if("#text/0", 0, 0, $if_content__setup);
export function $setup($scope) {
  _._text($scope["#text/1"], $x_getter($scope)());
  $if($scope, 1 ? 0 : 1);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);