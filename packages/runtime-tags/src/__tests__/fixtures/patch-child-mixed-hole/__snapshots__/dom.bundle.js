// tags/combo/index.marko
const $input_label__OR__input_qty = /*@__PURE__*/ _fill_join("b1", 4, /*@__PURE__*/ _fill_join("b0", 3, /*@__PURE__*/ _shell_or("b2", 5, ($scope) => _text($scope.a, $scope.d + $scope.e))));
const $input_qty = /*@__PURE__*/ _const(4, $input_label__OR__input_qty);

// template.marko
const $count = /*@__PURE__*/ _fill_let("a1", 5, ($scope) => $input_qty($scope.a, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
