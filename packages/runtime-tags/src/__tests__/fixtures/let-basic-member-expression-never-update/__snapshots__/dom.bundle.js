// template.marko
const $user = /* @__PURE__ */ _let(3, ($scope) => $user_id($scope, $scope.d?.id));
const $index__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$index($scope, $scope.c + 1);
}));
const $index = /* @__PURE__ */ _let(2, ($scope) => {
	$user($scope, $scope.c !== -1 && { id: $scope.c });
	$index__script($scope);
});
const $user_id = /* @__PURE__ */ _const(4, ($scope) => _text($scope.a, $scope.e));
