// template.marko
const $if_content__show = /*@__PURE__*/ _show(1, 0);
const $if_content__shown = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__show($scope, $scope._.e));
const $if = /*@__PURE__*/ _if(0, "<!><!><b>hi</b><!><span class=tail>tail</span>", "b%c%", $if_content__shown);
const $outer = /*@__PURE__*/ _let(3, ($scope) => $if($scope, $scope.d ? 0 : 1));
const $shown = /*@__PURE__*/ _let(4, $if_content__shown);
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$shown($scope, !$scope.e);
	});
	_on($scope.c, "click", function() {
		$outer($scope, !$scope.d);
	});
});
