export const $template = "<!><!><div> </div>";
export const $walks = /* over(1), replace, over(1), next(1), get, out(1) */"b%bD l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $get$hoisted_x = _._hoist("x", "ConditionalScope:#text/0");
const $if_content__x = /* @__PURE__ */_._const("x", ($scope, x) => _._assert_hoist(x));
const $if_content__setup = $scope => {
  $if_content__x($scope, 1);
};
const $if_content = /* @__PURE__ */_._content_branch(0, 0, $if_content__setup);
const $if = /* @__PURE__ */_._if("#text/0", $if_content);
export function $setup($scope) {
  _._text($scope["#text/1"], $get$hoisted_x($scope)());
  $if($scope, 1 ? 0 : 1);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);