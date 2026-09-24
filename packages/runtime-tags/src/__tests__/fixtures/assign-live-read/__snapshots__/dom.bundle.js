// template.marko
const $count__script = _script("a0", ($scope) => $scope.d);
const $count = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$count__script($scope);
});
const $resetCount2 = /*@__PURE__*/ _const(4, _script("a1", ($scope) => _on($scope.c, "click", $scope.e ||= $resetCount($scope))));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.d + 1);
	$count($scope, +$scope.d + 1);
}));
const $resetCount = ($scope) => function() {
	if ($scope.d > 0) $count($scope, 0);
};
