// template.marko
const $item_content__mult__OR__item = /*@__PURE__*/ _or(2, ($scope) => _text($scope.a, $scope.b * $scope._.d));
const $item_content__mult = /*@__PURE__*/ _closure_get(4, $item_content__mult__OR__item, 0, "a0");
const $mult__closure = /*@__PURE__*/ _closure($item_content__mult);
const $mult = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.c, $scope.d);
	$mult__closure($scope);
});
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$mult($scope, +$scope.d + 1);
}));
