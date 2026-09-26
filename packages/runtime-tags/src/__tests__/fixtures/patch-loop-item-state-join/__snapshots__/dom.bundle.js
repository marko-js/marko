// template.marko
const $for_content__n = /*@__PURE__*/ _init_for_closure("a3", 2, ($scope) => _text($scope.b, $scope._.g));
const $n = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$for_content__n($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));
