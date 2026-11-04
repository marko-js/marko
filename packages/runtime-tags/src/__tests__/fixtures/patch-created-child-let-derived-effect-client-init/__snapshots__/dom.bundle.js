// tags/child.marko
const $value = _fill_let("b1", 4, ($scope) => $value_b($scope, $scope.e?.b));
const $x__script = _script("b0", ($scope) => $scope.a.textContent += $scope.g);
const $x = /*@__PURE__*/ _const(6, $x__script);
const $value_b = /*@__PURE__*/ _const(5, ($scope) => $x($scope, $scope.f * 2));
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
