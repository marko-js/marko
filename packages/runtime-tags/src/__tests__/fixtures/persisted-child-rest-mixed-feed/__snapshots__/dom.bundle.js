// tags/echo/index.marko
const $input_label = ($scope, rest_label) => _text($scope.a, rest_label);
const $input2 = ($scope, input) => $input_label($scope, input?.label);
const $input = $input2;

// template.marko
const $input_label__OR__other = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _or(6, ($scope) => $input($scope.a, {
	label: $scope.e,
	other: $scope.f
})));
const $other = /*@__PURE__*/ _let(5, $input_label__OR__other);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$other($scope, $scope.f + 1);
}));
