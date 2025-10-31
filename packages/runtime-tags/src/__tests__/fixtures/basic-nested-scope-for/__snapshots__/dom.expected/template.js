export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content__selected__OR__num = /* @__PURE__ */_._or(4, $scope => {
  _._attr($scope["#button/0"], "data-selected", $scope._.selected === $scope.num);
  _._attr($scope["#button/0"], "data-multiple", $scope.num % $scope._.selected === 0);
});
const $for_content__num__script = _._script("__tests__/template.marko_1_num", $scope => _._on($scope["#button/0"], "click", function () {
  $selected($scope._, $scope.num);
}));
const $for_content__num = /* @__PURE__ */_._const("num", $scope => {
  _._text($scope["#text/1"], $scope.num);
  $for_content__selected__OR__num($scope);
  $for_content__num__script($scope);
});
const $for_content__selected = /* @__PURE__ */_._for_closure("#text/0", $for_content__selected__OR__num);
const $for_content__setup = $for_content__selected;
const $for_content__$params = /* @__PURE__ */_._const("$params2", $scope => $for_content__num($scope, $scope.$params2[0]));
const $for_content = /* @__PURE__ */_._content_branch("<button> </button>", /* get, next(1), get, out(1) */" D l", $for_content__setup, $for_content__$params);
const $selected = /* @__PURE__ */_._let("selected/1", $for_content__selected);
const $for = /* @__PURE__ */_._for_of("#text/0", $for_content);
export function $setup($scope) {
  $selected($scope, 0);
  $for($scope, [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);