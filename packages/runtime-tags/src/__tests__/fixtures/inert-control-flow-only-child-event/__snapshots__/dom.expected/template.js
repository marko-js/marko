export const $template = "<select></select>";
export const $walks = /* get, over(1) */" b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content__selected__OR__i = /* @__PURE__ */_._or(4, $scope => _._attr($scope["#option/0"], "selected", $scope._.selected === $scope.i));
const $for_content__selected = /* @__PURE__ */_._for_closure("#select/0", $for_content__selected__OR__i);
const $for_content__i = /* @__PURE__ */_._const("i", $scope => {
  _._text($scope["#text/1"], $scope.i);
  $for_content__selected__OR__i($scope);
});
const $for_content__setup = $for_content__selected;
const $for_content__$params = /* @__PURE__ */_._const("$params2", $scope => $for_content__i($scope, $scope.$params2[0]));
const $for_content = /* @__PURE__ */_._content_branch("<option> </option>", /* get, next(1), get, out(1) */" D l", $for_content__setup, $for_content__$params);
const $selected = /* @__PURE__ */_._let("selected/1", $for_content__selected);
const $for = /* @__PURE__ */_._for_until("#select/0", $for_content);
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._on($scope["#select/0"], "change", function (e) {
  $selected($scope, e.target.value);
}));
export function $setup($scope) {
  $selected($scope, 0);
  $for($scope, [3, 0, 1]);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);