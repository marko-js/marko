// template.marko
const $for_content__n = /*@__PURE__*/ _for_closure_patch("a4", 2, ($scope) => _text($scope.c, $scope._.g), 7);
const $for_content__$global_x = /*@__PURE__*/ _for_closure_patch("a5", 2, ($scope) => _text($scope.b, $scope.$.x), 8);
const $n = _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$for_content__n($scope);
});
const $global_x = _fill_global("a1", $for_content__$global_x, "x");
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));
