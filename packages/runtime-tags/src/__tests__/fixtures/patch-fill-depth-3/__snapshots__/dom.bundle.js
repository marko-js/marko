// template.marko
const $for_content__input_suffix__OR__count = /*@__PURE__*/ _fill_join("a9", 7, /*@__PURE__*/ _shell_join("a12", /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope.M + ":" + $scope._._._.h + "@" + $scope._._._.i))), ($join) => /*@__PURE__*/ _if_closure(0, 0, /*@__PURE__*/ _if_closure(0, 0, /*@__PURE__*/ _for_closure(0, $join))));
const $for_content__count = _resumed.a13 = /*@__PURE__*/ _closure_get(12, $for_content__input_suffix__OR__count, ($scope) => $scope._._._, "a4");
const $count = /*@__PURE__*/ _fill_let("a10", 8, /* @__PURE__ */ _closure($for_content__count));
const $setup__script = _script("a6", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.i + 1);
}));
