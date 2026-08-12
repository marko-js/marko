// template.marko
const $for_content2__input_suffix__OR__count__OR__cell = /*@__PURE__*/ _fill_join_for("a0", 5, /*@__PURE__*/ _or(3, ($scope) => _text($scope.a, $scope.c + ":" + $scope._._.f + "@" + $scope._._.g), 2), 0, 0);
const $for_content2__count = /*@__PURE__*/ _closure_get(8, $for_content2__input_suffix__OR__count__OR__cell, ($scope) => $scope._._);
const $count = /*@__PURE__*/ _let(6, /* @__PURE__ */ _closure($for_content2__count));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
