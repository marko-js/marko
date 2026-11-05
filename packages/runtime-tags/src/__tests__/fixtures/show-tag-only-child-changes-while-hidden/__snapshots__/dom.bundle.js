// template.marko
const $show = /*@__PURE__*/ _show(2);
const $visible = /*@__PURE__*/ _let(4, ($scope) => $show($scope, $scope.e));
const $if = /*@__PURE__*/ _if(3, "<b>B</b>");
const $inner = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$visible($scope, !$scope.e);
	});
	_on($scope.b, "click", function() {
		$inner($scope, !$scope.f);
	});
});
