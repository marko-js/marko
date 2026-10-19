// tags/child/index.marko
const $if_content__input_x = /*@__PURE__*/ _shell_init("b1", /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.f)));
const $input_x__OR__n__script = _script("b3", ($scope) => console.log(`effect ${$scope.f}:${$scope.g}`));
const $input_x__OR__n = /*@__PURE__*/ _shell_or("b5", 7, $input_x__OR__n__script);
const $n = /*@__PURE__*/ _fill_let("b6", 6, $input_x__OR__n);
const $setup__script = _script("b2", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.g + 1);
}));
const $input_x = fill("b4", /*@__PURE__*/ _const(5, ($scope) => {
	$input_x__OR__n($scope);
	$if_content__input_x($scope);
}));
