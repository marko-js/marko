// template.marko
const names = [
	"Dylan",
	"Michael",
	"Ryan",
	"Luke"
];
const $index = /*@__PURE__*/ _let(3);
const $user = /*@__PURE__*/ _let(4, ($scope) => {
	$user_id($scope, $scope.e?.id);
	$user_name($scope, $scope.e?.name);
});
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$index($scope, ("d" in $scope ? $scope.d : -1) === names.length - 1 ? -1 : ("d" in $scope ? $scope.d : -1) + 1);
	$user($scope, ("d" in $scope ? $scope.d : -1) !== -1 && {
		id: "d" in $scope ? $scope.d : -1,
		name: names["d" in $scope ? $scope.d : -1]
	});
}));
const $user_id = /*@__PURE__*/ _const(5, ($scope) => _text($scope.a, $scope.f));
const $user_name = /*@__PURE__*/ _const(6, ($scope) => _text($scope.b, $scope.g));
