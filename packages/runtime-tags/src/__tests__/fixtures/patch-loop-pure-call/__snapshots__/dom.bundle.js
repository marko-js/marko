// template.marko
const $for_content__setup = ($scope) => _text($scope.a, $scope.M);
const $for = /*@__PURE__*/ _for_to(0, "<span> </span>", "D ", $for_content__setup);
const $input_end__OR__start = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _or(6, ($scope) => $for($scope, [
	$scope.e,
	Math.max(0, $scope.f),
	1
])));
const $start = /*@__PURE__*/ _let(5, $input_end__OR__start);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$start($scope, $scope.f + 1);
}));
