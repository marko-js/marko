// template.marko
const $x__script = _script("a0", ($scope) => {
	$y($scope, $scope.c);
	$x($scope, 2);
});
const $x = /*@__PURE__*/ _let(2, ($scope) => {
	_text($scope.a, $scope.c);
	$x__script($scope);
});
const $y = /*@__PURE__*/ _let(3, ($scope) => _text($scope.b, $scope.d));
