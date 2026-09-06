// template.marko
const $for_content__item = ($scope, item) => _text($scope.a, item);
const $for_content__setup = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$items($scope._, $scope._.c.filter((_, j) => j !== $scope.M));
}));
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of(0, "<li> <button>x</button></li>", "D b ", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let(2, ($scope) => $for($scope, [$scope.c]));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$items($scope, [...$scope.c, "n" + $scope.c?.length]);
}));
