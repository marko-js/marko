// template.marko
const $for_content__count = _shell_for_closure("a4", 0, ($scope) => _text($scope.b, $scope._.g));
const $count = /*@__PURE__*/ _fill_let("a2", 6, ($scope) => {
	_text($scope.c, $scope.g);
	$for_content__count($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
