// template.marko
const $multipliedCount = /*@__PURE__*/ _render(($scope, multipliedCount) => _text($scope.d, multipliedCount));
const $count__OR__multiplier = /*@__PURE__*/ _or(6, ($scope) => $multipliedCount($scope, $scope.e * $scope.f));
const $count = /*@__PURE__*/ _let(4, $count__OR__multiplier);
const $multiplier__render = /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope.f));
const $multiplier = /*@__PURE__*/ _let(5, ($scope) => {
	$multiplier__render($scope);
	$count__OR__multiplier($scope);
});
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$multiplier($scope, $scope.f + 1);
	});
	_on($scope.c, "click", function() {
		$count($scope, $scope.e + 1);
	});
});
