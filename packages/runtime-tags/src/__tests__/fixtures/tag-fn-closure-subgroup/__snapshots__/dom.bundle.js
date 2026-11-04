// tags/code-block.marko
const $input_d__OR__f = /*@__PURE__*/ _or(9, ($scope) => _text($scope.a, $scope.i($scope.h)));
const $f2 = /*@__PURE__*/ _const(8, $input_d__OR__f);
const $input_a__OR__input_b__OR__input_c = /*@__PURE__*/ _or(6, ($scope) => $f2($scope, $f($scope)), 2);
const $input_b = /*@__PURE__*/ _const(4, $input_a__OR__input_b__OR__input_c);
const $f = ($scope) => function(t) {
	return t + $scope.d + $scope.e + $scope.f;
};
_resumed.b0 = $f;

// template.marko
const $b = /*@__PURE__*/ _let(7, ($scope) => $input_b($scope.b, $scope.h));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$b($scope, $scope.h + "!");
}));
