// template.marko
const $for_content__boost = _shell_for_closure("a4", 0, ($scope) => _text($scope.b, $scope._.f));
const $boost = /*@__PURE__*/ _fill_let("a2", 5, $for_content__boost);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$boost($scope, +$scope.f + 1);
}));
