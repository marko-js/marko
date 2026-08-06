// template.marko
const $for_content__input_suffix__OR__count__OR__item = /*@__PURE__*/ _fill_join("a0", 6, /*@__PURE__*/ _or(3, ($scope) => _text($scope.a, $scope.c + ":" + $scope._._.g + "@" + $scope._._.h), 2), ($join) => /*@__PURE__*/ _if_closure(0, 0, /*@__PURE__*/ _for_closure(0, $join)));
const $for_content__count = /*@__PURE__*/ _closure_get(10, $for_content__input_suffix__OR__count__OR__item, ($scope) => $scope._._);
const $count = /*@__PURE__*/ _let(7, /* @__PURE__ */ _closure($for_content__count));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.h + 1);
}));
