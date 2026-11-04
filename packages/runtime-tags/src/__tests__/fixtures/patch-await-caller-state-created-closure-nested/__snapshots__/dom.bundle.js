// tags/show-await.marko
const $catch_content = _content$1("b2", "error");
const $try_content__input_promise = /*@__PURE__*/ _closure_get_patch("b0", 4, ($scope) => _text($scope.b, $scope._._.d ? "p" : "-"), ($scope) => $scope._._);
const $try_content__x = /*@__PURE__*/ _closure_get_patch("b1", 5, ($scope) => _text($scope.a, $scope._.c));
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content__x = /*@__PURE__*/ _const(2, /* @__PURE__ */ _closure($try_content__x));
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const(3, ($scope) => {
	$await_promise($scope, $scope.d);
	$input_promise__closure($scope);
});

// template.marko
const $if_content__p = /*@__PURE__*/ _if_closure_patch("a3", 1, 0, ($scope) => $input_promise($scope.a, $scope._.g));
const $p = _let(6, $if_content__p);
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
