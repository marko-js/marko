// tags/child.marko
const $input_a__OR__input_b__OR__$global_g = /*@__PURE__*/ _global_or(/*@__PURE__*/ _or_patch("b1", 5, ($scope) => _text($scope.a, $scope.d + $scope.e + $scope.$.g)), /* @__PURE__ */ _global_closure(/* @__PURE__ */ _global_key("g"), "b0"));
const $input_a = /*@__PURE__*/ _const(3, $input_a__OR__input_b__OR__$global_g);
const $input_b = /*@__PURE__*/ _const(4, $input_a__OR__input_b__OR__$global_g);

// template.marko
const $n = _let(7, ($scope) => {
	$input_b($scope.a, "n" + $scope.h);
	$input_a($scope.b, "m" + $scope.h);
});
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.h + 1);
}));
