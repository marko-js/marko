// template.marko
const $shared = /*@__PURE__*/ _const(4, ($scope) => _text($scope.b, $scope.e));
const $shared__OR__once = ($scope) => {
	_text($scope.c, $scope.e + ("d" in $scope ? $scope.d : 1) * 3);
};
const $count = /*@__PURE__*/ _let(3, ($scope) => {
	$shared($scope, ("d" in $scope ? $scope.d : 1) * 2);
	$shared__OR__once($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, ("d" in $scope ? $scope.d : 1) + 1);
}));
