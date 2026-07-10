// template.marko
const $count4 = /*@__PURE__*/ _let(8, ($scope) => _text($scope.b, $scope.i));
const $count5 = /*@__PURE__*/ _let(9, ($scope) => _text($scope.d, $scope.j));
const $count6 = /*@__PURE__*/ _let(10, ($scope) => _text($scope.f, $scope.k));
const $count7 = /*@__PURE__*/ _let(11, ($scope) => _text($scope.h, $scope.l));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$count4($scope, ("i" in $scope ? $scope.i : 0) + 1);
	});
	_on($scope.c, "click", function() {
		$count5($scope, ("j" in $scope ? $scope.j : 0) + 1);
	});
	_on($scope.e, "click", function() {
		$count6($scope, ("k" in $scope ? $scope.k : 0) + 1);
	});
	_on($scope.g, "click", function() {
		$count7($scope, ("l" in $scope ? $scope.l : 0) + 1);
	});
});
