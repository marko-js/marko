// template.marko
const $for_content__x = /*@__PURE__*/ _for_closure(1, ($scope) => _text($scope.a, $scope._.d));
const $if_content__x = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.d));
const $x = /*@__PURE__*/ _let(3, ($scope) => {
	$if_content__x($scope);
	$for_content__x($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$x($scope, "filled");
}));
