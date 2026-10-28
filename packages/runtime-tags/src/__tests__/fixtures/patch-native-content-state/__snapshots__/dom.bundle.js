// template.marko
const $open = /*@__PURE__*/ _let(2, ($scope) => _attr_content($scope, "a", $scope.c ? box_a_default : null));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.c);
}));
