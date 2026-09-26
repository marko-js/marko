// template.marko
const $for_content__input_suffix__OR__count = /*@__PURE__*/ _fill_join("a0", 6, /*@__PURE__*/ _init_join("a6", /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope.M + ":" + $scope._._.g + "@" + $scope._._.h))), 0, ($join) => /*@__PURE__*/ _if_closure(0, 0, /*@__PURE__*/ _for_closure(0, $join)));
const $for_content__count = /*@__PURE__*/ _init_closure_get("a7", 10, $for_content__input_suffix__OR__count, ($scope) => $scope._._, "a3", 7);
const $count = /*@__PURE__*/ _let(7, /* @__PURE__ */ _closure($for_content__count));
const $setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.h + 1);
}));
