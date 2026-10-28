// tags/child.marko
const $if_content__input_a__script = _script("b0", ($scope) => $scope.a.textContent = "s:" + $scope._.f);
const $if_content__input_a = /*@__PURE__*/ _fill("b2", 5, /*@__PURE__*/ _if_closure(1, 0, $if_content__input_a__script));
const $if = /*@__PURE__*/ _if(1, "<div></div>", " ", $if_content__input_a);
const $open = /*@__PURE__*/ _fill_let("b4", 8, ($scope) => $if($scope, $scope.i ? 0 : 1));
const $setup__script$1 = _script("b1", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.i);
}));
const $input_a__OR__input_b = /*@__PURE__*/ _fill("| b2", 5, /*@__PURE__*/ _or_resume("b3", 7, ($scope) => _text($scope.a, $scope.f + $scope.g)));
const $input_b = /*@__PURE__*/ _const(6, $input_a__OR__input_b);

// template.marko
const $n = _let(7, ($scope) => $input_b($scope.a, $scope.h));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$n($scope, $scope.h + "k");
}));
