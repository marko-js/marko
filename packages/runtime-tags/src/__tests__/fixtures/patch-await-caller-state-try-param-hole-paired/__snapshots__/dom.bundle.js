// tags/show-await.marko
const $catch_content = _content$1("b3", "failed");
const $try_content__input_label__OR__x = /*@__PURE__*/ _or_patch("b2", 1, ($scope) => _text($scope.a, $scope._.c + ":" + $scope._._.e));
const $try_content__x = /*@__PURE__*/ _closure_get_patch("b1", 6, $try_content__input_label__OR__x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content__x = /*@__PURE__*/ _const(2, /* @__PURE__ */ _closure($try_content__x));
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;

// template.marko
const $p = _let(6, ($scope) => $input_promise($scope.b, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
