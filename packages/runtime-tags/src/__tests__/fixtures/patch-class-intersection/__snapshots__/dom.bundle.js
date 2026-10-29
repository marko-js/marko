// template.marko
const $input_tone__OR__count = /*@__PURE__*/ _fill_join("a3", 5, /*@__PURE__*/ _or(8, ($scope) => _attr_class($scope.a, [
	"btn",
	$scope.f,
	$scope.h % 2 && "odd"
])));
const $count = _let(7, ($scope) => {
	_attr_class($scope.b, $scope.h % 2 ? "odd" : "even");
	$input_tone__OR__count($scope);
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.h + 1);
}));
