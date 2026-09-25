// tags/child.marko
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$scope.d();
}));

// template.marko
const $n = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $inc = ($scope) => function() {
	$n($scope, +$scope.c + 1);
};
const $twice = ($scope) => function() {
	($scope.d ||= $inc($scope))();
	($scope.d ||= $inc($scope))();
};
_resumed.a0 = $twice;
