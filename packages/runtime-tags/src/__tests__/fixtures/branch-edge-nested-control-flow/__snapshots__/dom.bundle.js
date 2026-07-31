// template.marko
const $else_content__item_id = /*@__PURE__*/ _if_closure(0, 1, ($scope) => _text($scope.a, $scope._.d));
const $else_content__setup = $else_content__item_id;
const $if_content2__item_id = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.d));
const $for_content__if = /*@__PURE__*/ _if(0, "<b>even <!></b>", "Db%", $if_content2__item_id, "<i>odd <!></i>", "Db%", $else_content__setup);
const $for_content__item_id = /*@__PURE__*/ _const(3, ($scope) => {
	$for_content__if($scope, $scope.d % 2 === 0 ? 0 : 1);
	$if_content2__item_id($scope);
	$else_content__item_id($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__item_id($scope, $params2[0]?.id);
const $if_content__for = /*@__PURE__*/ _for_of(0, "<!>", "%", 0, $for_content__$params);
const $if_content__items = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__for($scope, [$scope._.h, "id"]));
const $if_content__setup = ($scope) => {
	$if_content__items._($scope);
	$if_content__shown._($scope);
};
const $if_content__show = /*@__PURE__*/ _show(2, 1);
const $if_content__shown = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__show($scope, $scope._.i));
const $if = /*@__PURE__*/ _if(0, "<!><!><u>tail</u><!><!>", "%b%c%", $if_content__setup);
const $outer = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $items = /*@__PURE__*/ _let(7, $if_content__items);
const $shown = /*@__PURE__*/ _let(8, $if_content__shown);
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$outer($scope, !$scope.g);
	});
	_on($scope.c, "click", function() {
		$items($scope, [...$scope.h.slice(1), $scope.h?.[0]]);
	});
	_on($scope.d, "click", function() {
		$items($scope, $scope.h.slice(1));
	});
	_on($scope.e, "click", function() {
		$items($scope, []);
	});
	_on($scope.f, "click", function() {
		$shown($scope, !$scope.i);
	});
});
