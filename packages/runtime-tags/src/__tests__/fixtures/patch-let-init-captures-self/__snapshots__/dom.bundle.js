// template.marko
const $a2 = _let(2, ($scope) => {
	_text($scope.b, typeof $scope.c);
	$a2($scope, $a($scope));
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$a2($scope, () => $scope.c);
}));
const $a = ($scope) => () => $scope.c;
_resumed.a0 = $a;
