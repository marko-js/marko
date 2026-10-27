// template.marko
const $act2__script = _script("a2", ($scope) => _on($scope.a, "click", $scope.h));
const $act2 = _action(7, "a1", $act2__script);
const $d = /*@__PURE__*/ _draft(4, ($scope) => {
	_text($scope.b, $scope.e);
	$act2($scope, $act($scope));
});
const $seen = /*@__PURE__*/ _let(6, ($scope) => _text($scope.c, $scope.g));
const $act = ($scope) => function() {
	$d($scope, 5);
	$d($scope, 6);
	$seen($scope, $scope.e);
};
_resumed.a0 = $act;
