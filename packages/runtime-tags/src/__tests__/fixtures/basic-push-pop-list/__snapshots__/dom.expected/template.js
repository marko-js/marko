export const $template = "<div><!><button id=add>Add</button><button id=remove>Remove</button></div>";
export const $walks = /* next(1), replace, over(1), get, over(1), get, out(1) */"D%b b l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content__item = /* @__PURE__ */_._const("item", $scope => _._text($scope["#text/0"], $scope.item));
const $for_content__$params = /* @__PURE__ */_._const("$params2", $scope => $for_content__item($scope, $scope.$params2[0]));
const $for_content = /* @__PURE__ */_._content_branch(" ", /* get, over(1) */" b", 0, $for_content__$params);
const $id__OR__items__script = _._script("__tests__/template.marko_0_id_items", $scope => _._on($scope["#button/1"], "click", function () {
  // TODO: nested writes ([...items, id++]) don't work
  const nextId = $scope.id + 1;
  $id($scope, nextId);
  $items($scope, [...$scope.items, nextId]);
}));
const $id__OR__items = /* @__PURE__ */_._or(5, $id__OR__items__script);
const $id = /* @__PURE__ */_._let("id/3", $id__OR__items);
const $for = /* @__PURE__ */_._for_of("#text/0", $for_content);
const $items__script = _._script("__tests__/template.marko_0_items", $scope => _._on($scope["#button/2"], "click", function () {
  $items($scope, $scope.items.slice(0, -1));
}));
const $items = /* @__PURE__ */_._let("items/4", $scope => {
  $for($scope, [$scope.items]);
  $id__OR__items($scope);
  $items__script($scope);
});
export function $setup($scope) {
  $id($scope, 0);
  $items($scope, []);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);