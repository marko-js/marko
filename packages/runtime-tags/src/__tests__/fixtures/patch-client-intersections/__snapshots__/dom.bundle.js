// tags/price-card.marko
const $input_label__OR__qty = /*@__PURE__*/ _or_patch("b1", 6, ($scope) => _text($scope.a, $scope.e + " x" + $scope.f));
const $qty = /*@__PURE__*/ _fill_let("b2", 5, $input_label__OR__qty);
const $setup__script$1 = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$qty($scope, +$scope.f + 1);
}));

// tags/promo-tag.marko
const $input_text__OR__seen = /*@__PURE__*/ _or_patch("c1", 6, ($scope) => _text($scope.a, $scope.e + " (" + $scope.f + ")"));
const $seen = /*@__PURE__*/ _fill_let("c2", 5, $input_text__OR__seen);
const $setup__script = _script("c0", ($scope) => _on($scope.b, "click", function() {
	$seen($scope, +$scope.f + 1);
}));

// tags/site-footer.marko
const $input_year__OR__frozen = /*@__PURE__*/ _or_patch("d0", 5, ($scope) => _text($scope.a, $scope.d + $scope.e));
const $frozen = _fill_let("d1", 4, $input_year__OR__frozen);
