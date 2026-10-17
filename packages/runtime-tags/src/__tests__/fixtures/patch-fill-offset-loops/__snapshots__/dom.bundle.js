// template.marko
const $for_content2__input_suffix__OR__count = /*@__PURE__*/ _fill_join_for("a5", 7, /*@__PURE__*/ _shell_or("a9", 1, ($scope) => _text($scope.a, $scope.M + ":" + $scope._._.h + "@" + $scope._._.i)), 1, 0);
const $for_content2__count = /*@__PURE__*/ _shell_init("a8", /*@__PURE__*/ _closure_get(10, $for_content2__input_suffix__OR__count, ($scope) => $scope._._, "a3"));
const $count = /*@__PURE__*/ _fill_let("a6", 8, /* @__PURE__ */ _closure($for_content2__count));
const $setup__script = _script("a4", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.i + 1);
}));
