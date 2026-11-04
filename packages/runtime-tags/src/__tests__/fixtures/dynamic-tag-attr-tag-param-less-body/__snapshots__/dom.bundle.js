// template.marko
const $child_content__n = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._.d), 0, "a0");
const $n__closure = /*@__PURE__*/ _closure($child_content__n);
const $n = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$n__closure($scope);
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.d + 1);
}));
