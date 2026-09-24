// tags/combo/index.marko
const $input_label__OR__input_qty = /*@__PURE__*/ _or(5, ($scope) => _text($scope.a, $scope.d + $scope.e));
const $input_label = /*@__PURE__*/ _const(3, $input_label__OR__input_qty);
const $input_qty = /*@__PURE__*/ _const(4, $input_label__OR__input_qty);

// template.marko
const $count = /*@__PURE__*/ _let(5, ($scope) => $input_qty($scope.a, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
const $input_title = _fill_const("a0", 4, ($scope) => $input_label($scope.a, $scope.e));
