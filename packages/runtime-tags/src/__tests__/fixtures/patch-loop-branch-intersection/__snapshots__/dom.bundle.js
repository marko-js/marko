// template.marko
const $if_content__input_suffix__OR__count = /*@__PURE__*/ _fill_join("a7", 6, /*@__PURE__*/ _or_resume("a10", 1, ($scope) => _text($scope.a, $scope._.M + ":" + $scope._._.g + "@" + $scope._._.h)), ($join) => /*@__PURE__*/ _for_closure(0, /*@__PURE__*/ _if_closure(0, 0, $join)));
const $if_content__count = /*@__PURE__*/ _init_resume("a9", /*@__PURE__*/ _closure_get(10, $if_content__input_suffix__OR__count, ($scope) => $scope._._, "a1"));
const $count = _let(7, /* @__PURE__ */ _closure($if_content__count));
const $setup__script = _script("a5", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.h + 1);
}));
