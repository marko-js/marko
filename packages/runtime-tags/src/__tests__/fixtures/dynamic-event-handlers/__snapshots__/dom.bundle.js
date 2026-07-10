// template.marko
const $clickCount__script = _script("a0", ($scope) => _on($scope.a, "click", ("c" in $scope ? $scope.c : 0) <= 1 ? () => {
	$clickCount($scope, ("c" in $scope ? $scope.c : 0) + 1);
} : false));
const $clickCount = /*@__PURE__*/ _let(2, ($scope) => {
	_text($scope.b, $scope.c);
	$clickCount__script($scope);
});
