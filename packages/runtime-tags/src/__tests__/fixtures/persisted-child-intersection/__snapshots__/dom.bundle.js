// tags/price-card.marko
const $input_label__OR__qty = /*@__PURE__*/ _fill_join("b1", 5, /*@__PURE__*/ _fill_join("b0", 4, /*@__PURE__*/ _or(6, ($scope) => _text($scope.a, $scope.e + " x" + $scope.f))));
const $qty = /*@__PURE__*/ _fill_let("b1", 5, $input_label__OR__qty);
const $setup__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$qty($scope, +$scope.f + 1);
}));
