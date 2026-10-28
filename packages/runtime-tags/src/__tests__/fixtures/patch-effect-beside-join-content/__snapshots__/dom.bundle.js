// template.marko
const $wrap_content__input_a__OR__n = /*@__PURE__*/ _fill_subscribers("a4", 3, /*@__PURE__*/ _or(4, ($scope) => _text($scope.b, $scope._.d + $scope.d)), 4, 0);
const $wrap_content__input_a__script = _script("a0", ($scope) => {
	$scope.c.textContent = String($scope._.d);
	$scope.c.dataset.runs = String(+($scope.c.dataset.runs || 0) + 1);
});
const $wrap_content__n = _let(3, $wrap_content__input_a__OR__n);
const $wrap_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$wrap_content__n($scope, +$scope.d + 1);
}));
