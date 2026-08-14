// template.marko
const $await_content = _resume("a2", /*@__PURE__*/ _await_content(0, "<em> </em>", "D "));
const $count = /*@__PURE__*/ _let(9, ($scope) => _text($scope.d, $scope.j));
const $setup__script = _script("a3", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.j + 1);
}));
