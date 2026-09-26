// tags/child.marko
const $input_x__OR__input_y = /*@__PURE__*/ _or(4, ($scope) => _return($scope, $scope.c + $scope.d));
const $input_x = /*@__PURE__*/ _const(2, $input_x__OR__input_y);

// template.marko
const $x = /*@__PURE__*/ _let(4, ($scope) => $input_x($scope.a, $scope.e));
const $b__OR__v = /*@__PURE__*/ _or(8, ($scope) => _text($scope.d, $scope.h + ":" + $scope.g), 1, 1);
const $b = /*@__PURE__*/ _let(6, $b__OR__v);
const $setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$x($scope, +$scope.e + 1);
	$b($scope, +$scope.g + 1);
}));
const $v = _var_resume("a0", /*@__PURE__*/ _const(7, $b__OR__v));
