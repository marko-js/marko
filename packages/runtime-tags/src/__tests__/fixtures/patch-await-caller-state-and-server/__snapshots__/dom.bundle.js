// tags/show-await.marko
const $await_content__x = ($scope, x) => _text($scope.b, x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;

// template.marko
const $n = _let(7, ($scope) => $input_promise($scope.b, Promise.resolve($scope.h)));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.h + 1);
}));
