export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $else_content__setup__script = _._script("__tests__/template.marko_3", $scope => _._on($scope["#button/0"], "click", function () {
  $for_content__editing($scope._, true);
}));
const $else_content__setup = $scope => {
  $else_content__count._($scope);
  $else_content__setup__script($scope);
};
const $else_content__count = /* @__PURE__ */_._if_closure("#text/0", 1, $scope => _._text($scope["#text/1"], $scope._.count));
const $else_content = /* @__PURE__ */_._content_branch("<button>Increment <!></button>", /* get, next(1), over(1), replace, out(1) */" Db%l", $else_content__setup);
const $if_content__counts__OR__count__OR__i__script = _._script("__tests__/template.marko_2_counts_count_i", $scope => _._on($scope["#button/0"], "click", function () {
  $counts($scope._._, [...$scope._._.counts.slice(0, $scope._.i), $scope._.count + 1, ...$scope._._.counts.slice($scope._.i + 1)]);
  $for_content__editing($scope._, false);
}));
const $if_content__counts__OR__count__OR__i = /* @__PURE__ */_._or(2, $if_content__counts__OR__count__OR__i__script, 2);
const $if_content__counts = /* @__PURE__ */_._closure_get("counts", $if_content__counts__OR__count__OR__i, $scope => $scope._._);
const $if_content__count = /* @__PURE__ */_._if_closure("#text/0", 0, $scope => {
  _._text($scope["#text/1"], $scope._.count + 1);
  $if_content__counts__OR__count__OR__i($scope);
});
const $if_content__i = /* @__PURE__ */_._if_closure("#text/0", 0, $if_content__counts__OR__count__OR__i);
const $if_content__setup = $scope => {
  $if_content__counts($scope);
  $if_content__count._($scope);
  $if_content__i._($scope);
};
const $if_content = /* @__PURE__ */_._content_branch("<button>Confirm <!></button>", /* get, next(1), over(1), replace, out(1) */" Db%l", $if_content__setup);
const $for_content__if = /* @__PURE__ */_._if("#text/0", $if_content, $else_content);
const $for_content__editing = /* @__PURE__ */_._let("editing/4", $scope => $for_content__if($scope, $scope.editing ? 0 : 1));
const $for_content__setup = $scope => {
  $for_content__editing($scope, false);
};
const $for_content__$params = /* @__PURE__ */_._const("$params2", $scope => {
  $for_content__count($scope, $scope.$params2[0]);
  $for_content__i($scope, $scope.$params2[1]);
});
const $for_content__count = /* @__PURE__ */_._const("count", $scope => {
  $if_content__count($scope);
  $else_content__count($scope);
});
const $for_content__i = /* @__PURE__ */_._const("i", $if_content__i);
const $for_content = /* @__PURE__ */_._content_branch("<!><!><!>", /* over(1), replace, over(2) */"b%c", $for_content__setup, $for_content__$params);
const $for = /* @__PURE__ */_._for_of("#text/0", $for_content);
const $counts__closure = /* @__PURE__ */_._closure($if_content__counts);
const $counts = /* @__PURE__ */_._let("counts/1", $scope => {
  $for($scope, [$scope.counts]);
  $counts__closure($scope);
});
export function $setup($scope) {
  $counts($scope, [0, 0, 0]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);