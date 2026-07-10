// template.marko
const $count = /*@__PURE__*/ _let(4, ($scope) => {
	_text($scope.b, $scope.e);
	_text($scope.d, `${_to_text($scope.e)}`);
});
const $setup__script = _script$1("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, ("e" in $scope ? $scope.e : 0) + 1);
	});
	_on($scope.c, "click", function() {});
});
