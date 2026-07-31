// template.marko
const $show = /*@__PURE__*/ _show(5, 1, 4);
const $visible = /*@__PURE__*/ _let(6, ($scope) => $show($scope, $scope.g));
const $count = /*@__PURE__*/ _let(7, ($scope) => _text($scope, "d", $scope.h));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$visible($scope, !$scope.g);
	});
	_on($scope.c, "click", function() {
		$count($scope, $scope.h + 1);
	});
});
