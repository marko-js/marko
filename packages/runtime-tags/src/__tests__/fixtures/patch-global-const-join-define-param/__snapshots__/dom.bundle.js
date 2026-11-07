// template.marko
const $Show_content__if = /*@__PURE__*/ _if(0, "<b>shown</b>");
const $Show_content__v__OR__flag = /*@__PURE__*/ _or_patch("a1", 5, ($scope) => $Show_content__if($scope, $scope.e && $scope.d ? 0 : 1));
const $Show_content__v = /*@__PURE__*/ _const(3, $Show_content__v__OR__flag);
const $on = _let(2, ($scope) => $Show_content__v($scope.b, $scope.c));
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.c);
}));
