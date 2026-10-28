// tags/show-await.marko
const $await_content2__x = /*@__PURE__*/ _init_resume("b2", /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.b, $scope._.c), 0, "b3"));
const $await_content2__y = ($scope, y) => _text($scope.c, y);
const $await_content2__$params = ($scope, $params3) => $await_content2__y($scope, $params3[0]);
const $await_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content2__$params);
const $await_content__x__closure = /*@__PURE__*/ _closure($await_content2__x);
const $await_content__x = /*@__PURE__*/ _const(2, ($scope) => {
	$await_content__await_promise($scope, Promise.resolve($scope.c + 10));
	$await_content__x__closure($scope);
});
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;

// template.marko
const $n = _let(5, ($scope) => $input_promise($scope.b, Promise.resolve($scope.f)));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.f + 1);
}));
