// template.marko
const $await_content__$params = ($scope, $params3) => _text($scope.b, $params3[0]);
const $for_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $for_content__n = /*@__PURE__*/ _for_closure_patch("a7", 1, ($scope) => $for_content__await_promise($scope, Promise.resolve($scope._.f)), 6);
const $n = _let(5, $for_content__n);
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.f + 1);
}));
