// template.marko
const $multipliedCount = ($scope, multipliedCount) => _text($scope.d, multipliedCount);
const $count__OR__multiplier = /*@__PURE__*/ _or(6, ($scope) => $multipliedCount($scope, ("e" in $scope ? "e" in $scope ? $scope.e : 0 : 0) * ("f" in $scope ? "f" in $scope ? $scope.f : 1 : 1)));
const $count = /*@__PURE__*/ _let(4, $count__OR__multiplier);
const $multiplier = /*@__PURE__*/ _let(5, ($scope) => {
	_text($scope.b, $scope.f);
	$count__OR__multiplier($scope);
});
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$multiplier($scope, ("f" in $scope ? $scope.f : 1) + 1);
	});
	_on($scope.c, "click", function() {
		$count($scope, ("e" in $scope ? $scope.e : 0) + 1);
	});
});
