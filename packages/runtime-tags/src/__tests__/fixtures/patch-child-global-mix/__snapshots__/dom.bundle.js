// tags/gm-badge/index.marko
const $global_flag = /*@__PURE__*/ _global_closure("b0", /* @__PURE__ */ _global_key(6, "flag"));
const $input_value__OR__$global_flag = /*@__PURE__*/ _global_or(4, ($scope) => _text($scope.a, $scope.d + $scope.$.flag), $global_flag);
const $input_value = /*@__PURE__*/ _const(3, $input_value__OR__$global_flag);

// template.marko
const $count = _let(2, ($scope) => $input_value($scope.a, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
