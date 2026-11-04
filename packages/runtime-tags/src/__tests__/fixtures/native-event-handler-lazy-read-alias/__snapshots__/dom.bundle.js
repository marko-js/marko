// template.marko
const $state = /*@__PURE__*/ _let(4, ($scope) => {
	$state_n($scope, $scope.e.n);
	$state_tag($scope, $scope.e.tag);
});
const $state_n = /*@__PURE__*/ _const(5, ($scope) => $n($scope, $scope.f));
const $n = ($scope) => _text($scope.c, $scope.f);
const $state_tag = /*@__PURE__*/ _const(6);
const $log = /*@__PURE__*/ _let(7, ($scope) => _text($scope.d, $scope.h));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$state($scope, {
			n: $scope.f + 1,
			tag: $scope.g
		});
	});
	_on($scope.b, "click", function() {
		$log($scope, `${$scope.h}[${$scope.f}:${$scope.g}]`);
	});
});
