// template.marko
const $for_content2__input_suffix__OR__count = /*@__PURE__*/ _or_patch("a1", 1, ($scope) => _text($scope.a, $scope.M + ":" + $scope._._.f + "@" + $scope._._.g));
const $for_content2__count = /*@__PURE__*/ _closure_get_patch("a2", 8, $for_content2__input_suffix__OR__count, ($scope) => $scope._._);
const $count = _let(6, /* @__PURE__ */ _closure($for_content2__count));
const $setup__script = _script("a5", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
