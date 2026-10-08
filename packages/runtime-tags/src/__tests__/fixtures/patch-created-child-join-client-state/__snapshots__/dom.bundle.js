// tags/plain-child.marko
const $input_a__OR__input_b = /*@__PURE__*/ _fill_join("b1", 4, /*@__PURE__*/ _fill_join("b0", 3, /*@__PURE__*/ _shell_or("b2", 5, ($scope) => _text($scope.a, $scope.d + $scope.e))));
const $input_a = /*@__PURE__*/ _const(3, $input_a__OR__input_b);

// template.marko
const $if_content__tab = _shell_if_closure("a5", 1, 0, ($scope) => $input_a($scope.a, $scope._.g));
const $tab = /*@__PURE__*/ _fill_let("a3", 6, $if_content__tab);
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$tab($scope, +$scope.g + 1);
}));
