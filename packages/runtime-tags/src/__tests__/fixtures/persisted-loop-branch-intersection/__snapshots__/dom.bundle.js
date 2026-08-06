// template.marko
const $if_content__input_suffix__OR__count__OR__item = /*@__PURE__*/ _fill_join("a0", 6, /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.c + ":" + $scope._._.g + "@" + $scope._._.h), 2), ($join) => /*@__PURE__*/ _for_closure(0, /*@__PURE__*/ _if_closure(0, 0, $join)));
const $if_content__count = /*@__PURE__*/ _closure_get(10, $if_content__input_suffix__OR__count__OR__item, ($scope) => $scope._._);
const $count = /*@__PURE__*/ _let(7, /* @__PURE__ */ _closure($if_content__count));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.h + 1);
}));
