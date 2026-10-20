// tags/child.marko
const $if_content__m__OR__x__OR__y = /*@__PURE__*/ _fill_join("b3", 6, /*@__PURE__*/ _fill_join("b1", 5, /*@__PURE__*/ _or(7, ($scope) => _text($scope.a, $scope.f + $scope.g + $scope.e), 2)));
const $if_content__x = /*@__PURE__*/ _fill_const("b1", 5, $if_content__m__OR__x__OR__y);
const $if_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join_if("b12", 6, /*@__PURE__*/ _fill_join("b11", 6, /*@__PURE__*/ _fill_join_if("b10", 5, /*@__PURE__*/ _shell_or("b6", 3, ($scope) => _text($scope.b, $scope._.f + $scope._.g)), 0, 0), () => () => {}), 0, 0);
const $if_content__input_a = /*@__PURE__*/ _shell_init("b2", /*@__PURE__*/ _fill_join("b10", 5, /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	$if_content__x($scope, $scope._.f + "!");
	$if_content__input_a__OR__input_b($scope);
})));
const $if_content__m = /*@__PURE__*/ _fill_let("b7", 4, $if_content__m__OR__x__OR__y);
const $if_content__setup__script = _script("b5", ($scope) => _on($scope.c, "click", function() {
	$if_content__m($scope, +$scope.e + 1);
}));
const $input_a__script = _script("b8", ($scope) => $scope.b.textContent = "s:" + $scope.f);
const $input_a = fill("b9", /*@__PURE__*/ _const(5, ($scope) => {
	$if_content__input_a($scope);
	$input_a__script($scope);
}));

// template.marko
const $n = /*@__PURE__*/ _fill_let("a1", 8, ($scope) => $input_a($scope.a, $scope.i));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.i + 1);
}));
