// template.marko
const $for_content2__input_suffix__OR__count__OR__cell = /*@__PURE__*/ _fill_join_for("a0", 7, /*@__PURE__*/ _or(3, ($scope) => _text($scope.a, $scope.c + ":" + $scope._._.h + "@" + $scope._._.i), 2), 1, 0);
const $for_content2__count = /*@__PURE__*/ _closure_get(10, $for_content2__input_suffix__OR__count__OR__cell, ($scope) => $scope._._);
const $count = /*@__PURE__*/ _let(8, /* @__PURE__ */ _closure($for_content2__count));
const $setup__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.i + 1);
}));
