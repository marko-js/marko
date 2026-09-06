// template.marko
const $if = /*@__PURE__*/ _if(2, "<span>shown</span>");
const $input_show__OR__on = /*@__PURE__*/ _fill_join("a0", 6, /*@__PURE__*/ _or(8, ($scope) => $if($scope, $scope.g && $scope.h ? 0 : 1)));
const $on = /*@__PURE__*/ _let(7, $input_show__OR__on);
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.h);
}));
