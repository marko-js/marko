// template.marko
const $for_content2__input_suffix__OR__count = _fill_join_for("a5", 5, /*@__PURE__*/ _shell_join("a8", /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope.M + ":" + $scope._._.f + "@" + $scope._._.g))), 0, 0, 0);
const $for_content2__count = _shell_closure_get("a9", 8, $for_content2__input_suffix__OR__count, ($scope) => $scope._._, "a3");
const $count = /*@__PURE__*/ _fill_let("a6", 6, /* @__PURE__ */ _closure($for_content2__count));
const $setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
