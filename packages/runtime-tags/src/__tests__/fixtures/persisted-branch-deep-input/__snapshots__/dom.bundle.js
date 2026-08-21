// template.marko
const $if = /*@__PURE__*/ _if(1, "<span>shown</span>");
const $input_opts_show__OR__on = /*@__PURE__*/ _fill_join("a0", 5, /*@__PURE__*/ _or(7, ($scope) => $if($scope, $scope.f && $scope.g ? 0 : 1)));
const $on = /*@__PURE__*/ _let(6, $input_opts_show__OR__on);
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.g);
}));
