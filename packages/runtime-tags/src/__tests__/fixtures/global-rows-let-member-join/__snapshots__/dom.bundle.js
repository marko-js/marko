// tags/number-stepper.marko
const $setup__script = _script("b0", ($scope) => {
	_on($scope.a, "click", function() {
		$scope.f(Math.max(1, $scope.g - 1));
	});
	_on($scope.c, "click", function() {
		$scope.f(Math.min($scope.h, $scope.g + 1));
	});
});
const $input_value = /*@__PURE__*/ _const(6, ($scope) => _text($scope.b, $scope.g));

// template.marko
const $for_content__item_value__OR__qty = /*@__PURE__*/ _or(11, ($scope) => _text($scope.c, $scope.k * $scope.j));
const $for_content__qty = /*@__PURE__*/ _let(10, ($scope) => {
	$input_value($scope.b, $scope.k);
	$for_content__item_value__OR__qty($scope);
});
const $valueChange = ($scope) => (_new_qty) => {
	$for_content__qty($scope, _new_qty);
};
_resumed.a0 = $valueChange;
