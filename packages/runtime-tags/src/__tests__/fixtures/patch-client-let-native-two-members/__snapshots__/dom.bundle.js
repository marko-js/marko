// tags/outer.marko
const $T = fill("b1", /*@__PURE__*/ _let(6, ($scope) => {
	$T_a($scope, $scope.g?.a);
	$T_b($scope, $scope.g?.b);
}));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_label__OR__T_a = /*@__PURE__*/ _or(8, ($scope) => $dynamicTag($scope, $scope.h, ($_) => ({ title: $scope.f })));
const $T_a = /*@__PURE__*/ _const(7, $input_label__OR__T_a);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__T_b = /*@__PURE__*/ _or(10, ($scope) => $dynamicTag2($scope, $scope.j, ($_) => ({ title: $scope.f })));
const $T_b = /*@__PURE__*/ _const(9, $input_label__OR__T_b);
const $input_label = fill("b0", /*@__PURE__*/ _const(5, ($scope) => {
	$input_label__OR__T_a($scope);
	$input_label__OR__T_b($scope);
}));
