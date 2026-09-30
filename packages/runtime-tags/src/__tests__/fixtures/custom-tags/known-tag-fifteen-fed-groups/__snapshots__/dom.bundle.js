// tags/child.marko
const $input_a = ($scope, input_a0) => _text($scope.a, input_a0);
const $input_a2 = ($scope, input_a1) => _text($scope.b, input_a1);
const $input_a3 = ($scope, input_a2) => _text($scope.c, input_a2);
const $input_a4 = ($scope, input_a3) => _text($scope.d, input_a3);
const $input_a5 = ($scope, input_a4) => _text($scope.e, input_a4);
const $input_a6 = ($scope, input_a5) => _text($scope.f, input_a5);
const $input_a7 = ($scope, input_a6) => _text($scope.g, input_a6);
const $input_a8 = ($scope, input_a7) => _text($scope.h, input_a7);
const $input_a9 = ($scope, input_a8) => _text($scope.i, input_a8);
const $input_a10 = ($scope, input_a9) => _text($scope.j, input_a9);
const $input_a11 = ($scope, input_a10) => _text($scope.k, input_a10);
const $input_a12 = ($scope, input_a11) => _text($scope.l, input_a11);
const $input_a13 = ($scope, input_a12) => _text($scope.m, input_a12);
const $input_a14 = ($scope, input_a13) => _text($scope.n, input_a13);

// template.marko
const $x = /*@__PURE__*/ _let(3, ($scope) => {
	$input_a($scope.a, $scope.d);
	$input_a2($scope.a, $scope.d);
	$input_a3($scope.a, $scope.d);
	$input_a4($scope.a, $scope.d);
	$input_a5($scope.a, $scope.d);
	$input_a6($scope.a, $scope.d);
	$input_a7($scope.a, $scope.d);
	$input_a8($scope.a, $scope.d);
	$input_a9($scope.a, $scope.d);
	$input_a10($scope.a, $scope.d);
	$input_a11($scope.a, $scope.d);
	$input_a12($scope.a, $scope.d);
	$input_a13($scope.a, $scope.d);
	$input_a14($scope.a, $scope.d);
	_text($scope.c, $scope.d);
});
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$x($scope, +$scope.d + 1);
}));
