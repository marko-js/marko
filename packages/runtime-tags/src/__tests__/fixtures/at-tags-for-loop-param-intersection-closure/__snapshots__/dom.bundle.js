// template.marko
const $item_content__mult__OR__item = /*@__PURE__*/ _or(1, /*@__PURE__*/ _render(($scope) => _text($scope.a, $scope.f * $scope._.d)));
const $item_content__mult = /*@__PURE__*/ _closure_get(6, $item_content__mult__OR__item);
const $mult__render = /*@__PURE__*/ _render(($scope) => _text($scope.c, $scope.d));
const $mult__closure = /*@__PURE__*/ _closure($item_content__mult);
const $mult = /*@__PURE__*/ _let(3, ($scope) => {
	$mult__render($scope);
	$mult__closure($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$mult($scope, $scope.d + 1);
}));
