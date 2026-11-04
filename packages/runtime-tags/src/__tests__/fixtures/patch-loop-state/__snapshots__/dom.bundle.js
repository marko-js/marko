// template.marko
const $for_content__count = /*@__PURE__*/ _for_closure_patch("a3", 0, ($scope) => _text($scope.b, $scope._.g), 7);
const $count = _let(6, ($scope) => {
	_text($scope.c, $scope.g);
	$for_content__count($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
