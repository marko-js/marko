// template.marko
const $for_content__count__OR__name__OR__item_id = /*@__PURE__*/ _fill_join("a2", 4, /*@__PURE__*/ _fill_join("a1", 3, /*@__PURE__*/ _or(5, ($scope) => _text($scope.a, $scope.d + "/" + $scope.e + "#" + $scope._.f), 2)));
const $for_content__count = _shell_for_closure("a6", 0, $for_content__count__OR__name__OR__item_id);
const $count = /*@__PURE__*/ _fill_let("a4", 5, $for_content__count);
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
