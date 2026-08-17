// template.marko
const $for_content__count__OR__name__OR__same_id = /*@__PURE__*/ _fill_join("a1", 4, /*@__PURE__*/ _fill_join("a0", 3, /*@__PURE__*/ _or(5, ($scope) => _text($scope.a, $scope.d + "/" + $scope.e + "#" + $scope._.f), 2)));
const $for_content__count = /*@__PURE__*/ _init_for_closure("a4", 0, $for_content__count__OR__name__OR__same_id);
const $count = /*@__PURE__*/ _let(5, $for_content__count);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
