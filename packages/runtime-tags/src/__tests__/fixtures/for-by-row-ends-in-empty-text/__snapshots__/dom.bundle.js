// template.marko
const $for_content__if = /*@__PURE__*/ _if(0, "big", 0, 0, "<section></section>");
const $for_content__setup = ($scope) => $for_content__if($scope, $scope.M > 9 ? 0 : 1);
const $for = /*@__PURE__*/ _for_of(0, "<!><!><!>", "b%", $for_content__setup);
const $items = /*@__PURE__*/ _let(2, ($scope) => $for($scope, [$scope.c, "id"]));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$items($scope, [...$scope.c, { id: $scope.c.length + 1 }]);
}));
