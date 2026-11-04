// template.marko
const $show = /*@__PURE__*/ _show(3);
const $visible = /*@__PURE__*/ _let(4, ($scope) => $show($scope, $scope.e));
const $count = /*@__PURE__*/ _let(5, ($scope) => _text($scope.c, $scope.f));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$visible($scope, !$scope.e);
	});
	_on($scope.b, "click", function() {
		$count($scope, +$scope.f + 1);
	});
});
