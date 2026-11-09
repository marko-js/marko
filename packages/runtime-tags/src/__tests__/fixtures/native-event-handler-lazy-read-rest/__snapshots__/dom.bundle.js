// template.marko
const $state = /*@__PURE__*/ _let(5, ($scope) => {
	$rest($scope, (({ a, ...rest }) => rest)($scope.f));
	$state_a($scope, $scope.f.a);
});
const $rest = /*@__PURE__*/ _const(7);
const $state_a = /*@__PURE__*/ _const(6, ($scope) => $a($scope, $scope.g));
const $a = ($scope) => _text($scope.d, $scope.g);
const $log = /*@__PURE__*/ _let(8, ($scope) => _text($scope.e, $scope.i));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$state($scope, {
			a: $scope.f.a + 1,
			b: $scope.f.b + 1
		});
	});
	_on($scope.b, "click", function() {
		$log($scope, JSON.stringify($scope.h));
	});
	_on($scope.c, "click", function() {
		$log($scope, `${JSON.stringify($scope.f)}:${$scope.h.a}:${JSON.stringify($scope.h)}`);
	});
});
