// template.marko
const $await_content__value = ($scope, value) => _text($scope.a, value);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__value);
const $showAsync = /*@__PURE__*/ _let(2, ($scope) => $await_promise($scope, $scope.c ? resolveAfter("ASYNC") : "SYNC"));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$showAsync($scope, !$scope.c);
}));
