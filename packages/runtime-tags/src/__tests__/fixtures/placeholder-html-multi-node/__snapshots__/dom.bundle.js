// template.marko
const $value = /*@__PURE__*/ _let(2, ($scope) => _html($scope, $scope.c, "a"));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$value($scope, "<em>c</em>");
}));
