// template.marko
const $for_content__setup = ($scope) => _text($scope.a, $scope.M);
const $for = /*@__PURE__*/ _for_until(0, "<span> </span>", "D ", $for_content__setup);
const $input_step__OR__count = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _or(6, ($scope) => $for($scope, [
	$scope.f,
	0,
	$scope.e
])));
const $count = /*@__PURE__*/ _let(5, $input_step__OR__count);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.f + 2);
}));
