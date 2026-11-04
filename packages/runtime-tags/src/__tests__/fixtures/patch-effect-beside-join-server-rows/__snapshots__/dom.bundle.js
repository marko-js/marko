// template.marko
const $for_content__input_a__OR__n = /*@__PURE__*/ _or_patch("a3", 4, ($scope) => _text($scope.b, $scope._.e + $scope.d));
const $for_content__input_a__script = _script_patch("a0 >e", ($scope) => {
	$scope.c.textContent = String($scope._.e);
	$scope.c.dataset.runs = String(+($scope.c.dataset.runs || 0) + 1);
});
const $for_content__n = /*@__PURE__*/ _fill_let("a4", 3, $for_content__input_a__OR__n);
const $for_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$for_content__n($scope, +$scope.d + 1);
}));
