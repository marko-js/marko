// template.marko
const $for_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]?.label);
const $for = /*@__PURE__*/ _for_of(0, "<li> </li>", "D ", 0, $for_content__$params);
const $items = _let(2, ($scope) => $for($scope, [$scope.c, (item) => item.id]));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$items($scope, [...$scope.c, {
		id: $scope.c.length + 1,
		label: "b"
	}]);
}));
