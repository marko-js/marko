// tags/child.marko
const $user = _let(6, ($scope) => $user_name($scope, $scope.g?.name));
const $user_name = /*@__PURE__*/ _const(7, ($scope) => $user_name_length($scope, $scope.h?.length));
const $user_name_length__script = _script("b1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.i);
}));
const $user_name_length = /*@__PURE__*/ _const(8, $user_name_length__script);
const $count = _let(9, ($scope) => _text($scope.a, $scope.j));
const $setup__script = _script("b0", ($scope) => _on($scope.c, "click", function() {
	$user($scope, { name: "x" });
}));
