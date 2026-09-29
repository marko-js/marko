// template.marko
const $for_content__item_label = ($scope, item_label) => _text($scope.a, item_label);
const $for_content__$params = ($scope, $params2) => $for_content__item_label($scope, $params2[0]?.label);
const $for = /*@__PURE__*/ _for_of(0, "<li> </li>", "D ", 0, $for_content__$params);
const $items = /*@__PURE__*/ _let(2, ($scope) => $for($scope, [$scope.c, (item) => item.id]));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$items($scope, [...$scope.c, {
		id: $scope.c?.length + 1,
		label: "b"
	}]);
}));
