// tags/price-card.marko
const $input_label__OR__qty = /*@__PURE__*/ _fill_join("b0", 4, /*@__PURE__*/ _or(6, ($scope) => _text($scope.a, $scope.e + " x" + $scope.f)));
const $qty = /*@__PURE__*/ _let(5, $input_label__OR__qty);
const $setup__script$1 = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$qty($scope, +$scope.f + 1);
}));

// template.marko
const $card = _var_resume("a0", /*@__PURE__*/ _const(8));
const $setup__script = _script("a1", ($scope) => _on($scope.d, "click", function(ev) {
	ev.target.dataset.card = typeof $scope.i;
}));
