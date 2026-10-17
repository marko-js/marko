// template.marko
const $for_content__n = /*@__PURE__*/ _shell_init("a4", /*@__PURE__*/ _for_closure(2, ($scope) => _text($scope.b, $scope._.g)));
const $n = /*@__PURE__*/ _fill_let("a2", 6, ($scope) => {
	_text($scope.b, $scope.g);
	$for_content__n($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));
