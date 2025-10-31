export const $template = "<div><!><button id=add>Add</button><button id=remove>Remove</button></div>";
export const $walks = /* next(1), replace, over(1), get, over(1), get, out(1) */"D%b b l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content__name = /* @__PURE__ */_._const("name", $scope => _._text($scope["#text/0"], $scope.name));
const $for_content__description = /* @__PURE__ */_._const("description", $scope => _._text($scope["#text/1"], $scope.description));
const $for_content__$params = /* @__PURE__ */_._const("$params2", $scope => $for_content__$temp($scope, $scope.$params2?.[0]));
const $for_content__$temp = /* @__PURE__ */_._const("$temp", $scope => {
  $for_content__name($scope, $scope.$temp.name);
  $for_content__description($scope, $scope.$temp.description);
});
const $for_content = /* @__PURE__ */_._content_branch("<div><!>: <!></div>", /* next(1), replace, over(2), replace, out(1) */"D%c%l", 0, $for_content__$params);
const $for = /* @__PURE__ */_._for_of("#text/0", $for_content);
const $items__script = _._script("__tests__/template.marko_0_items", $scope => {
  _._on($scope["#button/1"], "click", function () {
    $items($scope, [...$scope.items, {
      name: "JavaScript",
      description: "Java, but scriptier"
    }]);
  });
  _._on($scope["#button/2"], "click", function () {
    $items($scope, $scope.items.slice(0, -1));
  });
});
const $items = /* @__PURE__ */_._let("items/3", $scope => {
  $for($scope, [$scope.items]);
  $items__script($scope);
});
export function $setup($scope) {
  /* id */0;
  $items($scope, [{
    name: "Marko",
    description: "HTML Reimagined"
  }]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);