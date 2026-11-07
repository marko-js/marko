// template.marko
const $state = /*@__PURE__*/ _let(3, ($scope) => $rest($scope, (({ a, ...rest }) => rest)($scope.d)));
const $rest = /*@__PURE__*/ _const(6, ($scope) => $rest_a($scope, $scope.g.a));
const $rest_a = /*@__PURE__*/ _const(7);
const $log = /*@__PURE__*/ _let(8, ($scope) => _text($scope.c, $scope.i));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$state($scope, {
			...$scope.d,
			a: $scope.d.a + 1,
			b: $scope.d.b + 1
		});
	});
	_on($scope.b, "click", function() {
		$log($scope, `${$scope.i}[${$scope.d.a}:${$scope.h}:${$scope.d.b}]`);
	});
});
