// template.marko
const $outer2__script = _script("a4", ($scope) => _on($scope.a, "click", $scope.k));
const $outer2 = _action(10, "a3", $outer2__script);
const $d__OR__inner = /*@__PURE__*/ _or(9, ($scope) => $outer2($scope, $outer($scope)));
const $d = /*@__PURE__*/ _draft(4, ($scope) => {
	_text($scope.b, $scope.e);
	$d__OR__inner($scope);
});
const $seen = /*@__PURE__*/ _let(6, ($scope) => _text($scope.c, $scope.g));
const $inner2 = _action(7, "a2", $d__OR__inner);
const $outer = ($scope) => function() {
	$scope.h();
	$d($scope, 4);
	$seen($scope, $scope.e);
};
function $inner() {}
_resumed.a1 = $outer;
_resumed.a0 = $inner;
