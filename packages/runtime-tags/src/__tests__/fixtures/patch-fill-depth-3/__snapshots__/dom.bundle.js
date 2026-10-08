// template.marko
const $for_content__input_suffix__OR__count = _fill_join("a10", 7, /*@__PURE__*/ _shell_join("a13", /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope.M + ":" + $scope._._._.h + "@" + $scope._._._.i))), 0, ($join) => /*@__PURE__*/ _if_closure(0, 0, /*@__PURE__*/ _if_closure(0, 0, /*@__PURE__*/ _for_closure(0, $join))));
const $for_content__count = _shell_closure_get("a14", 12, $for_content__input_suffix__OR__count, ($scope) => $scope._._._, "a4");
const $count = /*@__PURE__*/ _fill_let("a11", 8, /* @__PURE__ */ _closure($for_content__count));
const $setup__script = _script("a7", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.i + 1);
}));
