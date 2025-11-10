export const $template = "<div></div>";
export const $walks = /* get, over(1) */" b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__text = /* @__PURE__ */_._if_closure("#div/0", 0, $scope => _._text($scope["#text/0"], $scope._.text));
const $if_content__setup = $if_content__text;
const $if_content = /* @__PURE__ */_._content_branch("<div> </div>", /* next(1), get, out(1) */"D l", $if_content__setup);
const $if = /* @__PURE__ */_._if("#div/0", $if_content);
const $hide__OR__text_length = /* @__PURE__ */_._or(4, $scope => $if($scope, !$scope.hide && $scope.text_length ? 0 : 1));
const $hide = /* @__PURE__ */_._let("hide/1", $hide__OR__text_length);
const $text = /* @__PURE__ */_._let("text/2", $scope => {
  $text_length($scope, $scope.text?.length);
  $if_content__text($scope);
});
const $id__script = _._script("__tests__/tags/child.marko_0_id", $scope => {
  $text($scope, $scope.id);
  $hide($scope, false);
});
const $id = /* @__PURE__ */_._const("id", $scope => {
  _._attr($scope["#div/0"], "id", $scope.id);
  $id__script($scope);
});
export function $setup($scope) {
  $hide($scope, true);
  $text($scope, "");
  $id($scope, _._id($scope));
}
const $text_length = /* @__PURE__ */_._const("text_length", $hide__OR__text_length);
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup);