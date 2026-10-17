// tags/child.marko
const $if_content__input_a = /*@__PURE__*/ _fill_join("b2", 5, /*@__PURE__*/ _fill_join("b1", 5, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.f))));
const $if = /*@__PURE__*/ _if(0, "<i> </i>", "D ", $if_content__input_a);
const $open = /*@__PURE__*/ _fill_let("b5", 8, ($scope) => $if($scope, $scope.i ? 0 : 1));
const $setup__script$1 = _script("b0", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.i);
}));
const $x = ($scope, x) => _text($scope.b, x);
const $input_a__OR__input_c = /*@__PURE__*/ _fill_join("b3", 6, /*@__PURE__*/ _fill_join("b2", 5, /*@__PURE__*/ _fill_join_value("b1", 5, /*@__PURE__*/ _shell_or("b4", 7, ($scope) => $x($scope, $scope.f + $scope.g)))));
const $input_c = /*@__PURE__*/ _const(6, $input_a__OR__input_c);

// template.marko
const $n = /*@__PURE__*/ _fill_let("a1", 7, ($scope) => $input_c($scope.a, $scope.h));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$n($scope, $scope.h + "k");
}));
