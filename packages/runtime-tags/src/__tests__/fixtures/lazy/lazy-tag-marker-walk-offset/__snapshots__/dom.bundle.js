// template.marko
let $load_Child_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $value = /*@__PURE__*/ _let(3, ($scope) => $load_Child_tag_input_value($scope.b, $scope.d));
const $setup__script = _script("b0", ($scope) => _on($scope.c, "click", function() {
	$value($scope, +$scope.d + 1);
}));

// child.marko
const $input_value = ($scope, input_value) => _text($scope.a, input_value);
