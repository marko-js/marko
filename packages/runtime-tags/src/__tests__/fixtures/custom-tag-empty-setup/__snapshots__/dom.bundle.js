// tags/cell/index.marko
const $input_value = ($scope, input_value) => _text($scope.a, input_value);

// tags/row/index.marko
const $input_quantity = ($scope, input_quantity) => $input_value($scope.b, input_quantity);

// template.marko
const $quantity = /*@__PURE__*/ _let(2, ($scope) => $input_quantity($scope.b, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$quantity($scope, $scope.c + 1);
}));
