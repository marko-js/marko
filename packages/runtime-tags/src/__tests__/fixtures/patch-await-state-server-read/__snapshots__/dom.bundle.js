// template.marko
const $await_content__$params = ($scope, $params2) => _text($scope.b, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(1, $await_content__$params);
const $n = _let(5, ($scope) => $await_promise($scope, Promise.resolve($scope.f)));
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.f + 1);
}));
