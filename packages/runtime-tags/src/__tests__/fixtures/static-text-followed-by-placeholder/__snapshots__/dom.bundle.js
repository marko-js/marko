// template.marko
const $count = /*@__PURE__*/ _let(2, ($scope) => _text($scope.a, $scope.c));
const $setup__script = _script("a0", ($scope) => {
	$scope.c ??= 0;
	_on($scope.b, "click", function() {
		$count($scope, $scope.c + 1);
	});
});
