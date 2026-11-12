// tags/show-await.marko
const $await_content2__$params = ($scope, $params3) => _text($scope.a, $params3[0]);
const $await_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content2__$params);
const $await_content__$global_flag = /*@__PURE__*/ _global_closure("b4", /* @__PURE__ */ _global_key(5, "flag"));
const $await_content__x = /*@__PURE__*/ _const(2, /* @__PURE__ */ _global_or(3, ($scope) => $await_content__await_promise($scope, Promise.resolve($scope.c + ":" + $scope.$.flag)), $await_content__$global_flag));
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;

// template.marko
const $p = _let(5, ($scope) => $input_promise($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
