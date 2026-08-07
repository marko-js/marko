// tags/echo/index.marko
const $input_label = ($scope, rest_label) => _text($scope.a, rest_label);
const $input2 = ($scope, input) => $input_label($scope, input?.label);
const $input = $input2;

// template.marko
const $label = /*@__PURE__*/ _let(2, ($scope) => $input($scope.a, { label: $scope.c }));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$label($scope, $scope.c + "!");
}));
