// template.marko
const $else_content__setup = ($scope) => _text($scope.a, $scope._.M);
const $if_content__setup = ($scope) => _text($scope.a, $scope._.M);
const $for_content__if = /*@__PURE__*/ _if(0, "<span>A<!></span>", "Db%", $if_content__setup, "<b>B<!></b>", "Db%", $else_content__setup);
const $for_content__item_on = ($scope, item_on) => $for_content__if($scope, item_on ? 0 : 1);
const $for_content__$params = ($scope, $params2) => $for_content__item_on($scope, $params2[0]?.on);
const $for = /*@__PURE__*/ _for_of(0, "<!><!><!>", "b%", 0, $for_content__$params);
const $list_2__OR__list_0__OR__list_ = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$list($scope, [
		$scope.d,
		$scope.e,
		$scope.f
	]);
}));
const $list = /*@__PURE__*/ _let(2, ($scope) => {
	$list_($scope, $scope.c?.[2]);
	$list_2($scope, $scope.c?.[0]);
	$list_3($scope, $scope.c?.[1]);
	$for($scope, [$scope.c, "id"]);
	$list_2__OR__list_0__OR__list_($scope);
});
const $list_ = /*@__PURE__*/ _const(3);
const $list_2 = /*@__PURE__*/ _const(4);
const $list_3 = /*@__PURE__*/ _const(5);
