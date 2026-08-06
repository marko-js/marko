// template.marko
const $for_content__input_suffix__OR__count__OR__item = /*@__PURE__*/ _fill_join("a0", 7, /*@__PURE__*/ _or(3, ($scope) => _text($scope.a, $scope.c + ":" + $scope._._._.h + "@" + $scope._._._.i), 2), ($join) => /*@__PURE__*/ _if_closure(0, 0, /*@__PURE__*/ _if_closure(0, 0, /*@__PURE__*/ _for_closure(0, $join))));
const $for_content__count = /*@__PURE__*/ _closure_get(12, $for_content__input_suffix__OR__count__OR__item, ($scope) => $scope._._._);
const $count = /*@__PURE__*/ _let(8, /* @__PURE__ */ _closure($for_content__count));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.i + 1);
}));
