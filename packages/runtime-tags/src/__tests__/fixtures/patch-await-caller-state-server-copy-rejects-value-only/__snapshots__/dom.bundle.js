// tags/show-await.marko
const $await_content__x = ($scope, x) => _text($scope.a, x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $catch_content = _content$1("b1", "<em>caught</em>");
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__input_promise = /*@__PURE__*/ _init_resume("b4", /*@__PURE__*/ _closure_get(4, ($scope) => $try_content__await_promise($scope, $scope._.d), 0, "b5"));
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const(3, $input_promise__closure);

// template.marko
const $p = _let(5, ($scope) => $input_promise($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
