// tags/child.marko
const $if_content__value_b__script = _script("b0", ($scope) => $scope.a.textContent += $scope._.g);
const $if_content__value_b = /*@__PURE__*/ _if_closure_patch("b3", 0, 0, $if_content__value_b__script);
const $value = _let(5, ($scope) => $value_b($scope, $scope.f?.b));
const $value_b = /*@__PURE__*/ _const(6, $if_content__value_b);
const $input_data = $value;

// template.marko
const $if_content__count = /*@__PURE__*/ _if_closure_patch("a3", 2, 0, ($scope) => $input_data($scope.a, { b: $scope._.g }));
const $count = _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if_content__count($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
