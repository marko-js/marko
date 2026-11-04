// template.marko
const $for_content__count__OR__name__OR__item_id = /*@__PURE__*/ _or_patch("a0", 5, ($scope) => _text($scope.a, $scope.d + "/" + $scope.e + "#" + $scope._.f), 2);
const $for_content__count = /*@__PURE__*/ _for_closure_patch("a4", 0, $for_content__count__OR__name__OR__item_id, 6);
const $count = _let(5, $for_content__count);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
