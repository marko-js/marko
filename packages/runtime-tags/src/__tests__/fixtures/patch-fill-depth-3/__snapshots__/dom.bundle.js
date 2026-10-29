// template.marko
const $for_content__input_suffix__OR__count = /*@__PURE__*/ _fill("a11", 7, /*@__PURE__*/ _or_resume("a14", 1, ($scope) => _text($scope.a, $scope.M + ":" + $scope._._._.h + "@" + $scope._._._.i)), ($join) => /*@__PURE__*/ _if_closure(0, 0, /*@__PURE__*/ _if_closure(0, 0, /*@__PURE__*/ _for_closure(0, $join))));
const $for_content__count = /*@__PURE__*/ _init_resume("a13", /*@__PURE__*/ _closure_get(12, $for_content__input_suffix__OR__count, ($scope) => $scope._._._, "a1"));
const $count = _let(8, /* @__PURE__ */ _closure($for_content__count));
const $setup__script = _script("a8", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.i + 1);
}));
