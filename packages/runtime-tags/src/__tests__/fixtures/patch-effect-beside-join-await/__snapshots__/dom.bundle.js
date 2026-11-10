// template.marko
const $await_content__input_a__OR__n = /*@__PURE__*/ _or_patch("a3", 4, ($scope) => _text($scope.b, $scope._.d + $scope.d));
const $await_content__input_a__script = _script_patch("a0 >d", ($scope) => {
	$scope.c.textContent = String($scope._.d);
	$scope.c.dataset.runs = String(+($scope.c.dataset.runs || 0) + 1);
});
const $await_content__n = /*@__PURE__*/ _fill_let("a4", 3, $await_content__input_a__OR__n);
const $await_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$await_content__n($scope, +$scope.d + 1);
}));
