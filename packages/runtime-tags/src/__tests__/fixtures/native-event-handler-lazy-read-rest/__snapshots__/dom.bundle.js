// template.marko
const $state = /*@__PURE__*/ _let(5, ($scope) => {
	$rest($scope, (({ a, ...rest }) => rest)($scope.f));
	$state_a($scope, $scope.f.a);
	$state_b($scope, $scope.f.b);
});
const $rest = /*@__PURE__*/ _const(8);
const $state_a = /*@__PURE__*/ _const(6, ($scope) => $a($scope, $scope.g));
const $a = ($scope) => _text($scope.d, $scope.g);
const $state_b = /*@__PURE__*/ _const(7);
const $log = /*@__PURE__*/ _let(9, ($scope) => _text($scope.e, $scope.j));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$state($scope, {
			a: $scope.g + 1,
			b: $scope.h + 1
		});
	});
	_on($scope.b, "click", function() {
		$log($scope, JSON.stringify($scope.i));
	});
	_on($scope.c, "click", function() {
		$log($scope, `${JSON.stringify($scope.f)}:${$scope.i.a}:${JSON.stringify($scope.i)}`);
	});
});
