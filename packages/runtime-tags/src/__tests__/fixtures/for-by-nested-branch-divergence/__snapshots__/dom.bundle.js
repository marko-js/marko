// template.marko
const $else_content__item_id = /* @__PURE__ */ _if_closure(0, 1, ($scope) => _text($scope.a, $scope._.e));
const $else_content__setup = $else_content__item_id;
const $if_content__item_id = /* @__PURE__ */ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e));
const $for_content__if = /* @__PURE__ */ _if(0, "<span>A<!></span>", "Db%l", $if_content__item_id, "<b>B<!></b>", "Db%l", $else_content__setup);
const $for_content__item_on = ($scope, item_on) => $for_content__if($scope, item_on ? 0 : 1);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_on($scope, $params2[0]?.on);
	$for_content__item_id($scope, $params2[0]?.id);
};
const $for_content__item_id = /* @__PURE__ */ _const(4, ($scope) => {
	$if_content__item_id($scope);
	$else_content__item_id($scope);
});
const $for = /* @__PURE__ */ _for_of(0, "<!><!><!>", "b%c", 0, $for_content__$params);
const $list_2__OR__list_0__OR__list_ = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$list($scope, [
		$scope.d,
		$scope.e,
		$scope.f
	]);
}));
const $list = /* @__PURE__ */ _let(2, ($scope) => {
	$list_($scope, $scope.c?.[2]);
	$list_2($scope, $scope.c?.[0]);
	$list_3($scope, $scope.c?.[1]);
	$for($scope, [$scope.c, "id"]);
	$list_2__OR__list_0__OR__list_($scope);
});
const $list_ = /* @__PURE__ */ _const(3);
const $list_2 = /* @__PURE__ */ _const(4);
const $list_3 = /* @__PURE__ */ _const(5);
