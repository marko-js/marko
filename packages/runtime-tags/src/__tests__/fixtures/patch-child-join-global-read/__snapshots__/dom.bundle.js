// tags/child.marko
const $input_a__OR__input_b = /*@__PURE__*/ _fill_join("b2", 4, /*@__PURE__*/ _fill_join("b1", 3, /*@__PURE__*/ _shell_or("b3", 5, /* @__PURE__ */ _fill_global_join("g", "b0", ($scope) => _text($scope.a, $scope.d + $scope.e + $scope.$.g)))));
const $input_a = /*@__PURE__*/ _const(3, $input_a__OR__input_b);
const $input_b = /*@__PURE__*/ _const(4, $input_a__OR__input_b);

// template.marko
const $n = /*@__PURE__*/ _fill_let("a1", 7, ($scope) => {
	$input_b($scope.a, "n" + $scope.h);
	$input_a($scope.b, "m" + $scope.h);
});
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.h + 1);
}));
