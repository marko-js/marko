// tags/outer.marko
const $await_promise = /*@__PURE__*/ _await_promise(1);
const $p = /*@__PURE__*/ _let(7, ($scope) => $await_promise($scope, $scope.h));
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$p($scope, 0);
}));
