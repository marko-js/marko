// template.marko
const $for_content__item = ($scope, item) => _text($scope.a, item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $if_content__show = /*@__PURE__*/ _show(3, 0, 2);
const $if_content__shown = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__show($scope, $scope._.f));
const $if_content__setup = ($scope) => {
	$if_content__shown._($scope);
	$if_content__items._($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of(1, "<b> </b>", "D ", 0, $for_content__$params);
const $if_content__items = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__for($scope, [$scope._.g]));
const $if = /*@__PURE__*/ _if(0, "<!><!><!><!><!><!>", "b%b%b%b%", $if_content__setup);
const $outer = /*@__PURE__*/ _let(4, ($scope) => $if($scope, $scope.e ? 0 : 1));
const $shown = /*@__PURE__*/ _let(5, $if_content__shown);
const $items = /*@__PURE__*/ _let(6, ($scope) => {
	$items_length($scope, $scope.g?.length);
	$if_content__items($scope);
});
const $setup__script = _script("a1", ($scope) => {
	_on($scope.b, "click", function() {
		$outer($scope, !$scope.e);
	});
	_on($scope.c, "click", function() {
		$shown($scope, !$scope.f);
	});
});
const $items_length = /*@__PURE__*/ _const(7, _script("a0", ($scope) => _on($scope.d, "click", function() {
	$items($scope, $scope.h ? [] : [1, 2]);
})));
