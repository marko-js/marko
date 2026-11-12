// template.marko
const $Badge_content__$global_flag = /*@__PURE__*/ _global_closure("a1", /* @__PURE__ */ _global_key(4, "flag"));
const $Badge_content__input_value = /*@__PURE__*/ _const(3, /* @__PURE__ */ _global_or(4, ($scope) => _text($scope.a, $scope.d + $scope.$.flag), $Badge_content__$global_flag));
const $count = _let(2, ($scope) => $Badge_content__input_value($scope.a, $scope.c));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
