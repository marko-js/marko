// tags/show-await.marko
const $await_content__$global_flag__OR__x = /*@__PURE__*/ _or_patch("b0", 3, ($scope) => _text($scope.a, $scope.c + ":" + $scope.$.flag));
const $await_content__$global_flag = /*@__PURE__*/ _closure_get(4, $await_content__$global_flag__OR__x, 0, "b1");
const $await_content__x = /*@__PURE__*/ _const(2, $await_content__$global_flag__OR__x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $global_flag = _fill_global("b4", /* @__PURE__ */ _closure($await_content__$global_flag), "flag");
const $input_promise = $await_promise;

// template.marko
const $p = _let(5, ($scope) => $input_promise($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
