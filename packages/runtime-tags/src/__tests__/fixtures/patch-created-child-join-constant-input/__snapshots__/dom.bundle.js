// tags/child.marko
const $input_a__OR__input_b = /*@__PURE__*/ _fill_join("b1", 4, /*@__PURE__*/ _fill_join("b0", 3, /*@__PURE__*/ _shell_or("b2", 5, ($scope) => _text($scope.a, $scope.d + $scope.e))));
const $input_b = /*@__PURE__*/ _const(4, $input_a__OR__input_b);

// template.marko
const $if_content__n = /*@__PURE__*/ _shell_init("a5", /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	$input_b($scope.a, $scope._.g);
	$input_b($scope.b, $scope._.g);
}));
const $n = /*@__PURE__*/ _fill_let("a3", 6, $if_content__n);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.g + 1);
}));
