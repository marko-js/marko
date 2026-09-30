// template.marko
const $for_content2__input_suffix__OR__count = _fill_join_for("a5", 7, /*@__PURE__*/ _init_join("a7", /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope.M + ":" + $scope._._.h + "@" + $scope._._.i))), 0, 1, 0);
const $for_content2__input_suffix = _closure_get(9, $for_content2__input_suffix__OR__count, ($scope) => $scope._._, "a2");
const $for_content2__count = _init_closure_get("a8", 10, $for_content2__input_suffix__OR__count, ($scope) => $scope._._, "a3");
const $count = /*@__PURE__*/ _let(8, /* @__PURE__ */ _closure($for_content2__count));
const $setup__script = _script("a4", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.i + 1);
}));
