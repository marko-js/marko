// template.marko
const $await_content__x = ($scope, x) => $Row_content__r_v($scope.a, x);
const $await_content__$params = ($scope, $params3) => $await_content__x($scope, $params3[0]);
const $Row_content__r_v = ($scope, r_v) => _text($scope.b, r_v);
const $await_promise = /*@__PURE__*/ _await_promise(1, $await_content__$params);
const $n = /*@__PURE__*/ _let(5, ($scope) => $await_promise($scope, Promise.resolve($scope.f)));
const $setup__script = _script("a5", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.f + 1);
}));
