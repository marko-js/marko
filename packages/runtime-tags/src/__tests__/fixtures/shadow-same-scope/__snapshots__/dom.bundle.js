// template.marko
const $count4 = /*@__PURE__*/ _let(8, ($scope) => _text($scope.b, $scope.i));
const $count5 = /*@__PURE__*/ _let(9, ($scope) => _text($scope.d, $scope.j));
const $count6 = /*@__PURE__*/ _let(10, ($scope) => _text($scope.f, $scope.k));
const $count7 = /*@__PURE__*/ _let(11, ($scope) => _text($scope.h, $scope.l));
const $setup__script = _script("a0", ($scope) => {
	$scope.i ??= 0;
	$scope.j ??= 0;
	$scope.k ??= 0;
	$scope.l ??= 0;
	_on($scope.a, "click", function() {
		$count4($scope, $scope.i + 1);
	});
	_on($scope.c, "click", function() {
		$count5($scope, $scope.j + 1);
	});
	_on($scope.e, "click", function() {
		$count6($scope, $scope.k + 1);
	});
	_on($scope.g, "click", function() {
		$count7($scope, $scope.l + 1);
	});
});
