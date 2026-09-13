// tags/echo/index.marko
const $input_label$1 = ($scope, rest_label) => _text($scope.a, rest_label);
const $input2 = ($scope, input) => $input_label$1($scope, input?.label);
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
const $input_label = _fill_const("a0", 4, $input_label__OR__other);
