// template.marko
const $for_content__input_suffix__OR__count = _fill_join("a8", 7, /*@__PURE__*/ _init_join("a10", /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope.M + ":" + $scope._._._.h + "@" + $scope._._._.i))), 0, ($join) => /*@__PURE__*/ _if_closure(0, 0, /*@__PURE__*/ _if_closure(0, 0, /*@__PURE__*/ _for_closure(0, $join))));
const $for_content__input_suffix = _closure_get(11, $for_content__input_suffix__OR__count, ($scope) => $scope._._._, "a3");
const $for_content__count = _init_closure_get("a11", 12, $for_content__input_suffix__OR__count, ($scope) => $scope._._._, "a4");
const $count = /*@__PURE__*/ _let(8, /* @__PURE__ */ _closure($for_content__count));
const $setup__script = _script("a7", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.i + 1);
}));
