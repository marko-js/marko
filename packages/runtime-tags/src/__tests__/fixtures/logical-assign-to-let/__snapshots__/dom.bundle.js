// template.marko
const $x = /*@__PURE__*/ _let_change(8);
const $changes__OR__value = /*@__PURE__*/ _or(7, ($scope) => $x($scope, $scope.g, $valueChange($scope)));
const $changes = /*@__PURE__*/ _let(5, ($scope) => {
	_text($scope, "e", $scope.f);
	$changes__OR__value($scope);
});
const $value = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope, "d", $scope.g);
	$changes__OR__value($scope);
});
const $setup__script = _script("a1", ($scope) => {
	_on($scope.a, "click", function() {
		$scope.i || $x($scope, 5);
	});
	_on($scope.b, "click", function() {
		$scope.i && $x($scope, 6);
	});
	_on($scope.c, "click", function() {
		$scope.i ?? $x($scope, 7);
	});
});
function $valueChange($scope) {
	return function(v) {
		$value($scope, v);
		$changes($scope, $scope.f + 1);
	};
}
_resume("a0", $valueChange);
