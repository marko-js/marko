// template.marko
const $n__OR__log = /*@__PURE__*/ _or(6, _script("a0", ($scope) => _on($scope.b, "click", (() => {
	const captured = "e" in $scope ? $scope.e : 0;
	return () => {
		$log($scope, `${"f" in $scope ? $scope.f : ""}[${captured}:${"e" in $scope ? $scope.e : 0}]`);
	};
})())));
const $n = /*@__PURE__*/ _let(4, ($scope) => {
	_text($scope.c, $scope.e);
	$n__OR__log($scope);
});
const $log = /*@__PURE__*/ _let(5, ($scope) => {
	_text($scope.d, $scope.f);
	$n__OR__log($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, ("e" in $scope ? $scope.e : 0) + 1);
}));
