// template.marko
const $await_content__x = ($scope, x) => _text($scope.b, x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(1, $await_content__$params);
const $n = /*@__PURE__*/ _let(5, ($scope) => $await_promise($scope, Promise.resolve($scope.f)));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.f + 1);
}));
