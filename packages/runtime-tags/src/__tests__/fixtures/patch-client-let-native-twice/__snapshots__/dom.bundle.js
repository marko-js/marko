// tags/outer.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__T = /*@__PURE__*/ _or(7, ($scope) => {
	$dynamicTag($scope, $scope.g, ($_) => ({ title: $scope.f }));
	$dynamicTag2($scope, $scope.g, ($_) => ({ title: $scope.f }));
});
const $T = fill("b1", /*@__PURE__*/ _let(6, $input_label__OR__T));
const $input_label = fill("b0", /*@__PURE__*/ _const(5, $input_label__OR__T));
