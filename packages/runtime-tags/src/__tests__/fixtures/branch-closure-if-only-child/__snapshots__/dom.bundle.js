// template.marko
const $count = /*@__PURE__*/ _let(4, ($scope) => {
	_text($scope.b, $scope.e);
	_text($scope.d, $scope.e);
});
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, $scope.e + 1);
	});
	_on($scope.c, "click", function() {});
});
