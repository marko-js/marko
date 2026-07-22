// template.marko
const $a__OR__b = /*@__PURE__*/ _or(7, /*@__PURE__*/ _render(($scope) => _text($scope.e, $scope.f + $scope.g)));
const $a__render = /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope.f));
const $a = /*@__PURE__*/ _let(5, ($scope) => {
	$a__render($scope);
	$a__OR__b($scope);
});
const $b__render = /*@__PURE__*/ _render(($scope) => _text($scope.d, $scope.g));
const $b = /*@__PURE__*/ _let(6, ($scope) => {
	$b__render($scope);
	$a__OR__b($scope);
});
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$a($scope, 10);
	});
	_on($scope.c, "click", function() {
		$b($scope, 5);
	});
});
