// template.marko
const $for_content2__input_suffix__OR__count = /*@__PURE__*/ _fill_join_for("a5", 5, /*@__PURE__*/ _or_resume("a8", 1, ($scope) => _text($scope.a, $scope.M + ":" + $scope._._.f + "@" + $scope._._.g)), 0, 0);
const $for_content2__count = /*@__PURE__*/ _init_resume("a7", /*@__PURE__*/ _closure_get(8, $for_content2__input_suffix__OR__count, ($scope) => $scope._._, "a1"));
const $count = /*@__PURE__*/ _let(6, /* @__PURE__ */ _closure($for_content2__count));
const $setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
