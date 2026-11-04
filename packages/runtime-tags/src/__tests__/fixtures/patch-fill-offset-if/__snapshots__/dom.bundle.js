// template.marko
const $if_content2__input_title__OR__count = /*@__PURE__*/ _or_patch("a1", 1, ($scope) => _text($scope.a, $scope._._.i + "@" + $scope._._.j));
const $if_content2__count = /*@__PURE__*/ _closure_get_patch("a2", 12, $if_content2__input_title__OR__count, ($scope) => $scope._._);
const $count = _let(9, /* @__PURE__ */ _closure($if_content2__count));
const $setup__script = _script("a6", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.j + 1);
}));
