// tags/effect-only.marko
const $input_n__script = _script("b0", ($scope) => console.log($scope.c));
const $input_n = /*@__PURE__*/ _const(2, $input_n__script);

// template.marko
const $Foo_content__n = /*@__PURE__*/ _const(2, _script("a1", ($scope) => console.log($scope.c)));
const $n = /*@__PURE__*/ _let(17, ($scope) => {
	$input_n($scope.a, $scope.r);
	_text($scope.b, $scope.r);
	$input_n($scope.d, $scope.r);
	_text($scope.e, $scope.r);
	_text($scope.f, $scope.r);
	$input_n($scope.g, $scope.r);
	_text($scope.i, $scope.r);
	_text($scope.j, $scope.r);
	$input_n($scope.k, $scope.r);
	_text($scope.l, $scope.r);
	_text($scope.m, $scope.r);
	$Foo_content__n($scope.n, $scope.r);
	_text($scope.o, $scope.r);
	_text($scope.p, $scope.r);
});
const $setup__script = _script("a2", ($scope) => _on($scope.q, "click", function() {
	$n($scope, +$scope.r + 1);
}));
