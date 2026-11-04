// template.marko
const $for_content__input_suffix__OR__count = /*@__PURE__*/ _or_patch("a1", 1, ($scope) => _text($scope.a, $scope.M + ":" + $scope._._.g + "@" + $scope._._.h));
const $for_content__count = /*@__PURE__*/ _closure_get_patch("a2", 10, $for_content__input_suffix__OR__count, ($scope) => $scope._._);
const $count = _let(7, /* @__PURE__ */ _closure($for_content__count));
const $setup__script = _script("a6", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.h + 1);
}));
