// template.marko
const $for_content__count__OR__rest = /*@__PURE__*/ _fill_join("a1", 4, /*@__PURE__*/ _or(5, ($scope) => _text($scope.a, $scope.M + ":" + Object.keys($scope.e).join("+") + "#" + $scope._.f)));
const $for_content__count = _shell_for_closure("a5", 0, $for_content__count__OR__rest);
const $count = /*@__PURE__*/ _fill_let("a3", 5, $for_content__count);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
