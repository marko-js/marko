// template.marko
const $await_content__value = ($scope, value) => _text($scope.a, value);
const $await_content__$params = ($scope, $params3) => $await_content__value($scope, $params3[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("a0", "caught <!>", "b%", 0, $catch_content__$params);
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__n = /*@__PURE__*/ _closure_get(3, ($scope) => $try_content__await_promise($scope, { then(resolve) {
	resolve($scope._.c);
} }), 0, "a2");
const $n = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($try_content__n));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.c + 1);
}));
