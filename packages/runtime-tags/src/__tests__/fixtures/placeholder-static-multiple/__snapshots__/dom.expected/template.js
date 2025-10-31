export const $template = "<div></div>";
export const $walks = /* get, over(1) */" b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__mounted = /* @__PURE__ */_._if_closure("#div/0", 0, $scope => _._text($scope["#text/0"], $scope._.mounted && "C"));
const $if_content__setup = $if_content__mounted;
const $if_content = /* @__PURE__ */_._content_branch("AB<!>D", /* over(1), replace, over(2) */"b%c", $if_content__setup);
const $if = /* @__PURE__ */_._if("#div/0", $if_content);
const $mounted = /* @__PURE__ */_._let("mounted/1", $scope => {
  $if($scope, $scope.mounted ? 0 : 1);
  $if_content__mounted($scope);
});
const $setup__script = _._script("__tests__/template.marko_0", $scope => $mounted($scope, true));
export function $setup($scope) {
  $mounted($scope, undefined);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);