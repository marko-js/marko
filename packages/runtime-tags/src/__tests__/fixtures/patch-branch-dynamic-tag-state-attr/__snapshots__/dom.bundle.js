// template.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0, /* @__PURE__ */ _content$1("a0", "x"));
const $if_content__input_on__OR__count = /*@__PURE__*/ _or_patch("a1", 1, ($scope) => $if_content__dynamicTag($scope, $scope._.f ? "p" : "div", ($_) => ({ "data-n": $scope._.g })));
const $if_content__count = /*@__PURE__*/ _if_closure_patch("a6", 0, 0, $if_content__input_on__OR__count);
const $count = _let(6, $if_content__count);
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
