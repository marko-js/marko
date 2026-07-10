// template.marko
const $i = /*@__PURE__*/ _let(2, ($scope) => _attr($scope.a, "pattern", $scope.c % 2 ? /^b+$/ : /^a+$/));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$i($scope, $scope.c + 1);
}));
