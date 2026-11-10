// tags/child.marko
const $if_content__input_b__OR__input_a = /*@__PURE__*/ _or_patch("b0", 1, ($scope) => _text($scope.a, $scope._.e + $scope._.d));
const $if_content__input_b = /*@__PURE__*/ _if_closure_patch("b4", 0, 0, $if_content__input_b__OR__input_a);
const $if_content__setup = ($scope) => {
	$if_content__input_b._($scope);
	$if_content__input_a._($scope);
};
const $if_content__input_a = /*@__PURE__*/ _if_closure_patch("b2", 0, 0, $if_content__input_b__OR__input_a);
const $if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__setup);
const $input_b = /*@__PURE__*/ _const(3, ($scope) => {
	$if($scope, $scope.d ? 0 : 1);
	$if_content__input_b($scope);
});
const $input_a = /*@__PURE__*/ _const(4, $if_content__input_a);

// template.marko
const $n = _let(7, ($scope) => {
	$input_b($scope.a, $scope.h ? "s" + $scope.h : "");
	$input_a($scope.b, "c" + $scope.h);
});
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.h + 1);
}));
