// template.marko
const $show = /*@__PURE__*/ _show(5, 2, 4);
const $visible = /*@__PURE__*/ _let(6, ($scope) => $show($scope, $scope.g));
const $if = /*@__PURE__*/ _if(3, "<b>B</b>");
const $inner = /*@__PURE__*/ _let(7, ($scope) => $if($scope, $scope.h ? 0 : 1));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$visible($scope, !$scope.g);
	});
	_on($scope.b, "click", function() {
		$inner($scope, !$scope.h);
	});
});
