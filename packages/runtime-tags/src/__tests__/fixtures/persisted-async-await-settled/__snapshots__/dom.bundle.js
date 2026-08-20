// template.marko
const $count = /*@__PURE__*/ _let(8, ($scope) => _text($scope.d, $scope.i));
const $setup__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.i + 1);
}));
const $await_content = _resume("a1", /*@__PURE__*/ _await_content(1, "<em> </em>", "D "));
