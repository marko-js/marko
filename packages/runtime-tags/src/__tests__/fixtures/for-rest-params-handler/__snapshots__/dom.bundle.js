// template.marko
const $for_content__setup = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$clicked($scope._, $scope.c.join(","));
}));
const $clicked = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
