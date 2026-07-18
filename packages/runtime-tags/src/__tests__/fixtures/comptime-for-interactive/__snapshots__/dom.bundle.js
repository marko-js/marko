// template.marko
const $on3 = /*@__PURE__*/ _let(4, ($scope) => _text($scope.b, $scope.e ? "off" : "on"));
const $on4 = /*@__PURE__*/ _let(5, ($scope) => _text($scope.d, $scope.f ? "off" : "on"));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$on3($scope, !$scope.e);
	});
	_on($scope.c, "click", function() {
		$on4($scope, !$scope.f);
	});
});
