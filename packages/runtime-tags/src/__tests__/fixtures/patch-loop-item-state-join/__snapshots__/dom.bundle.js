// template.marko
const $for_content__n = _shell_for_closure("a4", 2, ($scope) => _text($scope.b, $scope._.g));
const $n = /*@__PURE__*/ _fill_let("a2", 6, ($scope) => {
	_text($scope.b, $scope.g);
	$for_content__n($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));
