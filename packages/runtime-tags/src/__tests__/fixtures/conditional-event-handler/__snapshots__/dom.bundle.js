// template.marko
const $clicks__script = _script("a0", ($scope) => _on($scope.a, "click", ("c" in $scope ? $scope.c : 0) < 3 && (() => $clicks($scope, ("c" in $scope ? $scope.c : 0) + 1) - 1)));
const $clicks = /*@__PURE__*/ _let(2, ($scope) => {
	_text($scope.b, $scope.c);
	$clicks__script($scope);
});
