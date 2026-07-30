// template.marko
const $if_content__item_id = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e));
const $for_content__if = /*@__PURE__*/ _if(0, "<p>item <!></p>", "Db%", $if_content__item_id);
const $for_content__item_show = ($scope, item_show) => $for_content__if($scope, item_show ? 0 : 1);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_show($scope, $params2[0]?.show);
	$for_content__item_id($scope, $params2[0]?.id);
};
const $for_content__item_id = /*@__PURE__*/ _const(4, $if_content__item_id);
const $for = /*@__PURE__*/ _for_of(0, "<!>", "b%", 0, $for_content__$params);
const $items = /*@__PURE__*/ _let(4, ($scope) => $for($scope, [$scope.e, "id"]));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$items($scope, [...$scope.e.slice(1), $scope.e?.[0]]);
	});
	_on($scope.c, "click", function() {
		$items($scope, $scope.e.map((item) => ({
			...item,
			show: !item.show
		})));
	});
	_on($scope.d, "click", function() {
		$items($scope, $scope.e.slice(1));
	});
});
