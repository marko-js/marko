// template.marko
const $x = /*@__PURE__*/ _let(5, ($scope) => _text($scope, "d", $scope.f));
const $seen = /*@__PURE__*/ _let(6, ($scope) => _text($scope, "e", $scope.g));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$seen($scope, String($x($scope, +$scope.f + 1) - 1));
	});
	_on($scope.b, "click", function() {
		$seen($scope, String($x($scope, +$scope.f + 1)));
	});
	_on($scope.c, "click", function() {
		$seen($scope, String($x($scope, +$scope.f - 1) + 1));
	});
});
