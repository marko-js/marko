// template.marko
const $show = /*@__PURE__*/ _show(1);
const $open = /*@__PURE__*/ _let(4, ($scope) => $show($scope, "e" in $scope ? $scope.e : true));
const $n = /*@__PURE__*/ _let(5, ($scope) => _text($scope.d, $scope.f));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$open($scope, !("e" in $scope ? $scope.e : true));
	});
	_on($scope.c, "click", function() {
		$n($scope, ("f" in $scope ? $scope.f : 0) + 1);
	});
});
