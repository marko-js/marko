// template.marko
const $await_promise = /*@__PURE__*/ _await_promise(1);
const $x = /*@__PURE__*/ _let(6, ($scope) => $await_promise($scope, Promise.resolve($scope.g)));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$x($scope, "z");
}));
