// template.marko
const $for_content__setup = ($scope) => _text($scope.a, $scope.M);
const $show = /*@__PURE__*/ _show(4, 2);
const $visible = /*@__PURE__*/ _let(5, ($scope) => $show($scope, $scope.f));
const $for = /*@__PURE__*/ _for_of(3, "<b> </b>", "D ", $for_content__setup);
const $items = /*@__PURE__*/ _let(6, ($scope) => $for($scope, [$scope.g, (n) => n]));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$visible($scope, !$scope.f);
	});
	_on($scope.b, "click", function() {
		$items($scope, [0, 1]);
	});
});
