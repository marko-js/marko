// tags/price-card.marko
const $input_label__OR__qty = /*@__PURE__*/ _fill_join("b2", 5, /*@__PURE__*/ _fill_join("b1", 4, /*@__PURE__*/ _or(6, ($scope) => _text($scope.a, $scope.e + " x" + $scope.f))));
const $qty = /*@__PURE__*/ _fill_let("b2", 5, $input_label__OR__qty);
const $setup__script$1 = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$qty($scope, +$scope.f + 1);
}));

// tags/promo-tag.marko
const $input_text__OR__seen = /*@__PURE__*/ _fill_join("c2", 5, /*@__PURE__*/ _fill_join("c1", 4, /*@__PURE__*/ _or(6, ($scope) => _text($scope.a, $scope.e + " (" + $scope.f + ")"))));
const $seen = /*@__PURE__*/ _fill_let("c2", 5, $input_text__OR__seen);
const $setup__script = _script("c0", ($scope) => _on($scope.b, "click", function() {
	$seen($scope, +$scope.f + 1);
}));
