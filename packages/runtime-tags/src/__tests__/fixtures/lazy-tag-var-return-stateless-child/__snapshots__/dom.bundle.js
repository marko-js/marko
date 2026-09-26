// template.marko
let $load_Child_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $value = /*@__PURE__*/ _let(5, ($scope) => $load_Child_tag_input_value($scope.b, $scope.f));
const $setup__script = _script("b1", ($scope) => _on($scope.d, "click", function() {
	$value($scope, +$scope.f + 1);
}));
const $doubled = _var_resume("b0", ($scope, doubled) => _text($scope.e, doubled));

// child.marko
const $input_value = /*@__PURE__*/ _const(2, ($scope) => _return($scope, $scope.c * 2));
