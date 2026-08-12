// template.marko
const $if_content2__input_title__OR__count = /*@__PURE__*/ _fill_join_if("a0", 8, /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._._.i + "@" + $scope._._.j)), 1, 0, 0, 0);
const $if_content2__count = /*@__PURE__*/ _closure_get(12, $if_content2__input_title__OR__count, ($scope) => $scope._._);
const $count = /*@__PURE__*/ _let(9, /* @__PURE__ */ _closure($if_content2__count));
const $setup__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.j + 1);
}));
