// template.marko
const $item_content__n__OR__label = /*@__PURE__*/ _fill_join("a2", 2, /*@__PURE__*/ _or(3, ($scope) => _text($scope.a, $scope.c + $scope._.h)));
const $item_content__n = _init_closure_get("a6", 9, $item_content__n__OR__label, 0, "a9");
const $n__closure = /*@__PURE__*/ _closure($item_content__n);
const $n = /*@__PURE__*/ _let(7, ($scope) => {
	_text($scope.c, $scope.h);
	$n__closure($scope);
});
const $setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.h + 1);
}));
