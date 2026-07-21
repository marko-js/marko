// template.marko
const $message = /*@__PURE__*/ _let(4, /*@__PURE__*/ _render(($scope) => _text($scope.c, $scope.e)));
const $log = /*@__PURE__*/ _let(5, /*@__PURE__*/ _render(($scope) => _text($scope.d, $scope.f)));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$log($scope, `${$scope.f}[${$scope.e}]`);
	});
	_on($scope.b, "click", function() {
		$message($scope, $scope.e + "!");
	});
});
