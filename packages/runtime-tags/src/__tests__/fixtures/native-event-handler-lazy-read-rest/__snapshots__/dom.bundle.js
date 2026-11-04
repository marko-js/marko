// template.marko
const $state = /*@__PURE__*/ _let(4, ($scope) => {
	$rest($scope, (({ a, ...rest }) => rest)($scope.e));
	$state_a($scope, $scope.e.a);
	$state_b($scope, $scope.e.b);
});
const $rest = /*@__PURE__*/ _const(7);
const $state_a = /*@__PURE__*/ _const(5, ($scope) => $a($scope, $scope.f));
const $a = ($scope) => _text($scope.c, $scope.f);
const $state_b = /*@__PURE__*/ _const(6);
const $log = /*@__PURE__*/ _let(8, ($scope) => _text($scope.d, $scope.i));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$state($scope, {
			a: $scope.f + 1,
			b: $scope.g + 1
		});
	});
	_on($scope.b, "click", function() {
		$log($scope, JSON.stringify($scope.h));
	});
});
