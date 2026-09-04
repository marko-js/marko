// template.marko
const $input_value__OR__count = /*@__PURE__*/ _or(8, _script("a1", ($scope) => _lifecycle($scope, {
	onMount: function() {
		$count($scope, +$scope.h + 1);
	},
	onUpdate: function() {
		$count($scope, $scope.h + 10);
	},
	value: $scope.f
})));
const $count = /*@__PURE__*/ _let(7, ($scope) => {
	_text($scope.b, $scope.h);
	$input_value__OR__count($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.h + 1);
}));
