// template.marko
const $await_content__input_a__OR__n = /*@__PURE__*/ _fill_subscribers("a7", 3, /*@__PURE__*/ _or_resume("a9", 4, ($scope) => _text($scope.b, $scope._.d + $scope.d)), 4, 0);
const $await_content__input_a__script = _script("a0", ($scope) => {
	$scope.c.textContent = String($scope._.d);
	$scope.c.dataset.runs = String(+($scope.c.dataset.runs || 0) + 1);
});
const $await_content__input_a = /*@__PURE__*/ _init_resume("a2", _closure_resume("a4", /*@__PURE__*/ _closure_get(4, ($scope) => {
	$await_content__input_a__OR__n($scope);
	$await_content__input_a__script($scope);
})));
const $await_content__n = /*@__PURE__*/ _fill_let("a3", 3, $await_content__input_a__OR__n);
const $await_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$await_content__n($scope, +$scope.d + 1);
}));
