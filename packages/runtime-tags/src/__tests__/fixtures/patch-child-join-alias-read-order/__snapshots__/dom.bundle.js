// tags/child.marko
const $if_content__input_a = /*@__PURE__*/ _fill_join("b1", 6, /*@__PURE__*/ _if_closure(2, 0, ($scope) => _text($scope.a, $scope._.g)));
const $if = /*@__PURE__*/ _if(2, "<i> </i>", "D ", $if_content__input_a);
const $open = /*@__PURE__*/ _fill_let("b3", 8, ($scope) => $if($scope, $scope.i ? 0 : 1));
const $setup__script$1 = _script("b0", ($scope) => _on($scope.d, "click", function() {
	$open($scope, !$scope.i);
}));
const $input_b__OR__input_a = /*@__PURE__*/ _fill_join("b1", 6, /*@__PURE__*/ _patch_or("b2", 9, ($scope) => _text($scope.b, $scope.g + $scope.h)), () => () => {});
const $input_a = /*@__PURE__*/ _fill_const("b1", 6, ($scope) => {
	$if_content__input_a($scope);
	_text($scope.a, $scope.g);
	$input_b__OR__input_a($scope);
}, $if_content__input_a);
const $input_b = /*@__PURE__*/ _const(7, $input_b__OR__input_a);

// template.marko
const $n = /*@__PURE__*/ _fill_let("a1", 7, ($scope) => {
	$input_b($scope.a, "n" + $scope.h);
	$input_a($scope.b, "m" + $scope.h);
});
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.h + 1);
}));
