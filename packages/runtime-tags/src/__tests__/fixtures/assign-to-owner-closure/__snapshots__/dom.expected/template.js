export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__setup__script = _._script("__tests__/template.marko_1", $scope => _._on($scope["#button/0"], "click", function () {
  $hide($scope._, true);
}));
const $if_content__setup = $if_content__setup__script;
const $if_content = /* @__PURE__ */_._content_branch("<button></button>", /* get, over(1) */" b", $if_content__setup);
const $if = /* @__PURE__ */_._if("#text/0", $if_content);
const $hide = /* @__PURE__ */_._let("hide/1", $scope => $if($scope, !$scope.hide ? 0 : 1));
export function $setup($scope) {
  $hide($scope, undefined);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);