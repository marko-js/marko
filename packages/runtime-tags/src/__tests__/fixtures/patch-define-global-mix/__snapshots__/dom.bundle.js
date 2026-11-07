// template.marko
const $Badge_content__$global_flag__OR__input_value = /*@__PURE__*/ _or(4, ($scope) => _text($scope.a, $scope.d + $scope.$.flag));
const $Badge_content__$global_flag = /*@__PURE__*/ _closure_get_patch("a1", 3, $Badge_content__$global_flag__OR__input_value);
const $Badge_content__input_value = /*@__PURE__*/ _const(3, $Badge_content__$global_flag__OR__input_value);
const $count = _let(2, ($scope) => $Badge_content__input_value($scope.a, $scope.c));
const $global_flag = _fill_global("a2", /* @__PURE__ */ _closure($Badge_content__$global_flag), "flag");
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
