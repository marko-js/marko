// template.marko
const $y = /*@__PURE__*/ _let_change(8, ($scope) => _text($scope.c, $scope.i));
const $x__OR__yChange = /*@__PURE__*/ _or(7, ($scope) => $y($scope, $scope.f, $scope.g));
const $x = /*@__PURE__*/ _let(5, ($scope) => {
	_text($scope.b, $scope.f);
	$x__OR__yChange($scope);
});
const $z = /*@__PURE__*/ _let_change(10, ($scope) => _text($scope.d, $scope.k));
const $yChange2 = /*@__PURE__*/ _let(6, ($scope) => {
	$z($scope, void 0, $scope.g);
	$x__OR__yChange($scope);
});
const $setup__script = _script("a1", ($scope) => {
	_on($scope.a, "click", function() {
		$y($scope, +$scope.i + 1);
	});
	_on($scope.e, "click", function() {
		$yChange2($scope, null);
	});
});
const $yChange = ($scope) => function(newValue) {
	$x($scope, newValue + 1);
};
_resumed.a0 = $yChange;
