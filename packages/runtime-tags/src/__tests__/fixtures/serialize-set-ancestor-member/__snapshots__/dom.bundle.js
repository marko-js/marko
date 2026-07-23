// template.marko
const $checked = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$checked($scope, ($scope.d?.set).size === 1 && ($scope.d?.set).has($scope.d) ? "intact" : "broken");
}));
