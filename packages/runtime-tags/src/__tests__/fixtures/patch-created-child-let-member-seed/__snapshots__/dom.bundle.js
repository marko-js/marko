// tags/child.marko
const $user = _let(5, ($scope) => $user_name($scope, $scope.f?.name));
const $user_name = /*@__PURE__*/ _const(6, ($scope) => $user_name_length($scope, $scope.g?.length));
const $user_name_length__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.h);
}));
const $user_name_length = /*@__PURE__*/ _const(7, $user_name_length__script);
const $count = _let(8, ($scope) => _text($scope.a, $scope.i));
