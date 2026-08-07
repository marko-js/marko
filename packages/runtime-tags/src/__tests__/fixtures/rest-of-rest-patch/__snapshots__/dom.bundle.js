// tags/echo/index.marko
const $input_label = ($scope, input_label) => _text($scope.b, input_label);

// template.marko
const $label = /*@__PURE__*/ _let(2, ($scope) => $input_label($scope.a, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$label($scope, $scope.c + "!");
}));
