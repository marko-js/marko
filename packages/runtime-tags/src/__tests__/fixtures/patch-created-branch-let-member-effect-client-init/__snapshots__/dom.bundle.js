// tags/child.marko
const $if_content__value = _fill_let("b2", 1, ($scope) => $if_content__value_b($scope, $scope.b?.b));
const $if_content__input_data = /*@__PURE__*/ _if_closure_patch("b1", 0, 0, ($scope) => $if_content__value($scope, $scope._.e));
const $if_content__value_b__script = _script("b0", ($scope) => $scope.a.textContent += $scope.c);
const $if_content__value_b = /*@__PURE__*/ _const(2, $if_content__value_b__script);
const $input_data = /*@__PURE__*/ _const(4, $if_content__input_data);

// template.marko
const $count = _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$input_data($scope.c, { b: $scope.g });
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
