// template.marko
const $if = /*@__PURE__*/ _if(1, "<b>shown</b>");
const $on__OR__flag = /*@__PURE__*/ _or_patch("a3", 7, ($scope) => $if($scope, $scope.g && $scope.f ? 0 : 1));
const $if2 = /*@__PURE__*/ _if(2, "<i>chained</i>");
const $on__OR__off = /*@__PURE__*/ _or_patch("a4", 9, ($scope) => $if2($scope, !$scope.i && $scope.f ? 0 : 1));
const $if3 = /*@__PURE__*/ _if(3, "<u>whole</u>");
const $on__OR__g_flag = /*@__PURE__*/ _or_patch("a6", 16, ($scope) => $if3($scope, $scope.p && $scope.f ? 0 : 1));
const $on__OR__user_name = /*@__PURE__*/ _or_patch("a5", 13, ($scope) => _text($scope.e, $scope.f ? $scope.m : "-"));
const $on = _let(5, ($scope) => {
	$on__OR__flag($scope);
	$on__OR__off($scope);
	$on__OR__g_flag($scope);
	$on__OR__user_name($scope);
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.f);
}));
