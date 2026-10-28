// template.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0, /* @__PURE__ */ _content$1("a0", "x"));
const $if_content__input_on__OR__count = /*@__PURE__*/ _fill_join_if("a3", 5, /*@__PURE__*/ _or_resume("a5", 1, ($scope) => $if_content__dynamicTag($scope, $scope._.f ? "p" : "div", ($_) => ({ "data-n": $scope._.g }))), 0, 0);
const $if_content__count = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_on__OR__count);
const $count = /*@__PURE__*/ _let(6, $if_content__count);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
