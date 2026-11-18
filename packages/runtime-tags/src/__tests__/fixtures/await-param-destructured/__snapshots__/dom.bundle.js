// template.marko
const $await_content__count = /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.c, $scope._.g), 0, "a0");
const $count__closure = /*@__PURE__*/ _closure($await_content__count);
const $count = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$count__closure($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
