// tags/item.marko
const $input_n__$global_a = /*@__PURE__*/ _fill_global("b0", ($scope) => _text($scope.a, $scope.e + $scope.$.a), "a");
const $input_n__OR__input_i = /*@__PURE__*/ _or_patch("b2", 6, /* @__PURE__ */ _fill_global("b1", ($scope) => _text($scope.b, $scope.f + $scope.e + $scope.$.a), "a"));
const $input_n = /*@__PURE__*/ _const(4, ($scope) => {
	$input_n__OR__input_i($scope);
	$input_n__$global_a($scope);
});

// template.marko
const $n = _let(2, ($scope) => $input_n($scope.b, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.c + 1);
}));
