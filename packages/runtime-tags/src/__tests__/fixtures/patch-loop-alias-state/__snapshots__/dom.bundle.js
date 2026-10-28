// template.marko
const $for_content__count__OR__name__OR__item_id = /*@__PURE__*/ _fill_signal("3 a0,4 a1", /*@__PURE__*/ _or(5, ($scope) => _text($scope.a, $scope.d + "/" + $scope.e + "#" + $scope._.f), 2));
const $for_content__count = /*@__PURE__*/ _init_resume("a5", /*@__PURE__*/ _for_closure(0, $for_content__count__OR__name__OR__item_id));
const $count = /*@__PURE__*/ _let(5, $for_content__count);
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
