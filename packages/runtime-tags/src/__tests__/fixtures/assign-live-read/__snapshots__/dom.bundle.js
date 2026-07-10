// template.marko
const $resetCount2 = /*@__PURE__*/ _const(4, _script("a2", ($scope) => _on($scope.c, "click", $scope.e)));
const $count__script = _script("a1", ($scope) => "d" in $scope ? $scope.d : 0);
const $count = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$resetCount2($scope, $resetCount($scope));
	$count__script($scope);
});
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, ("d" in $scope ? $scope.d : 0) + 1);
	$count($scope, ("d" in $scope ? $scope.d : 0) + 1);
}));
function $resetCount($scope) {
	return function() {
		if (("d" in $scope ? $scope.d : 0) > 0) $count($scope, 0);
	};
}
_resume("a0", $resetCount);
