// tags/price-card/index.marko
const $input_qty = ($scope, input_qty) => _text($scope.b, input_qty);

// template.marko
const $count = /*@__PURE__*/ _let(5, ($scope) => $input_qty($scope.a, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.f + 1);
}));
