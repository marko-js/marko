// template.marko
const $await_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $n = /*@__PURE__*/ _let(2, ($scope) => $await_promise($scope, `v${$scope.c}`));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.c + 1);
}));
