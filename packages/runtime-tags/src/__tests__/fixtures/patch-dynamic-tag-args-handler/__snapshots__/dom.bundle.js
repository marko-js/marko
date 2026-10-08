// template.marko
const $n = /*@__PURE__*/ _fill_let("a5", 8, ($scope) => _text($scope.c, $scope.i));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.i + 1);
}));
const $onClick = ($scope) => function() {
	$n($scope, $scope.g.length);
};
_resumed.a0 = $onClick;
