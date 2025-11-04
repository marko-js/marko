export const $template = "<button></button><ul></ul>";
export const $walks = /* get, over(1), get, over(1) */" b b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content__item = /* @__PURE__ */_._const("item", $scope => _._text($scope["#text/0"], $scope.item));
const $for_content__$params = /* @__PURE__ */_._const("$params2", $scope => $for_content__item($scope, $scope.$params2[0]));
const $for_content = /* @__PURE__ */_._content_branch("<li> </li>", /* next(1), get, out(1) */"D l", 0, $for_content__$params);
const $getul = _._el("__tests__/template.marko_0/#ul", "#ul/1");
const $for = /* @__PURE__ */_._for_of("#ul/1", $for_content);
const $items__script = _._script("__tests__/template.marko_0_items", $scope => _._on($scope["#button/0"], "click", function () {
  $items($scope, [...$scope.items, $scope.items?.length]);
}));
const $items = /* @__PURE__ */_._let("items/2", $scope => {
  $for($scope, [$scope.items]);
  $items__script($scope);
});
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  {
    const getter = $getul($scope);
    getter().classList.add('attached');
  }
});
export function $setup($scope) {
  $items($scope, [0, 1]);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);