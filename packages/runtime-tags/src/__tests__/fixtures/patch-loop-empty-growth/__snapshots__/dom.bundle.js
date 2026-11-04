// template.marko
const $for_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<li> </li>", "D ", 0, $for_content__$params);
const $items = _let(2, ($scope) => $for($scope, [$scope.c]));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$items($scope, [...$scope.c, "x" + $scope.c.length]);
}));
