// template.marko
const $Child_content__value = _fill_let("a6", 4, ($scope) => $Child_content__value_b($scope, $scope.e?.b));
const $Child_content__value_b__script = _script("a1", ($scope) => $scope.a.textContent += $scope.f);
const $Child_content__value_b = /*@__PURE__*/ _const(5, $Child_content__value_b__script);
const $Child_content__input_data = $Child_content__value;
const $if_content__count = /*@__PURE__*/ _if_closure_patch("a5", 2, 0, ($scope) => $Child_content__input_data($scope.a, { b: $scope._.g }));
const $count = _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if_content__count($scope);
});
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
