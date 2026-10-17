// tags/child.marko
const $if_content__input_b = /*@__PURE__*/ _fill_join("b1", 6, /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.g)));
const $if = /*@__PURE__*/ _if(1, "<i> </i>", "D ", $if_content__input_b);
const $open = /*@__PURE__*/ _fill_let("b3", 8, ($scope) => $if($scope, $scope.i ? 0 : 1));
const $setup__script$1 = _script("b0", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.i);
}));
const $input_a__OR__input_b = /*@__PURE__*/ _fill_join_value("b1", 6, /*@__PURE__*/ _patch_or("b2", 7, ($scope) => _text($scope.a, $scope.f + $scope.g)));
const $input_b = /*@__PURE__*/ _fill_const("b1", 6, ($scope) => {
	$if_content__input_b($scope);
	$input_a__OR__input_b($scope);
}, $if_content__input_b);

// template.marko
const $if_content__n = /*@__PURE__*/ _shell_init("a5", /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	$input_b($scope.a, $scope._.g);
	$input_b($scope.b, $scope._.g);
}));
const $n = /*@__PURE__*/ _fill_let("a3", 6, $if_content__n);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.g + 1);
}));
