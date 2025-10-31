export const $template = "<button>Count: <!></button><!><div>Parent: <!></div>";
export const $walks = /* get, next(1), over(1), replace, out(1), dynamicTagWithVar, over(1), next(1), over(1), replace, out(1) */" Db%l1bDb%l";
import customTag from './tags/custom-tag.marko';
const tags = [customTag];
import * as _ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/2", 0, () => $y, 1);
const $x__script = _._script("__tests__/template.marko_0_x", $scope => _._on($scope["#button/0"], "click", function () {
  $x($scope, $scope.x + 1);
}));
const $x = /* @__PURE__ */_._let("x/5", $scope => {
  _._text($scope["#text/1"], $scope.x);
  $dynamicTag($scope, tags[0], () => [$scope.x]);
  $x__script($scope);
});
export function $setup($scope) {
  $x($scope, 1);
}
const $y = _._var_resume("__tests__/template.marko_0_y/var", /* @__PURE__ */_._const("y", $scope => _._text($scope["#text/4"], $scope.y)));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);