// tags/outer.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_label__OR__T = /*@__PURE__*/ _fill_join_if("c2", 5, /*@__PURE__*/ _or_resume("c4", 1, ($scope) => "g" in $scope._ && $if_content__dynamicTag($scope, $scope._.g, ($_) => ({ label: $scope._.f }))), 1, 0);
const $if_content__T = /*@__PURE__*/ _if_closure(1, 0, $if_content__input_label__OR__T);
const $T = /*@__PURE__*/ _let(6, $if_content__T);
const $setup__script = _script("c1", ($scope) => _on($scope.a, "click", function() {
	$T($scope, void 0);
}));
