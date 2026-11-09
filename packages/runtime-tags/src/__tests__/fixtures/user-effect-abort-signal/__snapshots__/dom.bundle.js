// template.marko
const $a = /*@__PURE__*/ _let(5, ($scope) => _text($scope.a, $scope.f));
const $b = /*@__PURE__*/ _let(6, ($scope) => _text($scope.b, $scope.g));
const $input_value__script = _script("a0", ($scope) => {
	{
		const previousValue = $a($scope, $scope.e + 1);
		onAbort($scope, 0, () => $b($scope, previousValue));
	}
	$signal($scope, 1).label = `run ${$scope.e}`;
});
