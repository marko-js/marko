// tags/show-await.marko
const $await_content__input_promise = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.b, $scope._.d ? "p" : "-"), 0, "b0");
const $await_content__x = ($scope, x) => _text($scope.a, x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise__closure = /*@__PURE__*/ _closure($await_content__input_promise);
const $input_promise = /*@__PURE__*/ _const(3, ($scope) => {
	$await_promise($scope, $scope.d);
	$input_promise__closure($scope);
});

// template.marko
const $if_content__p = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_promise($scope.a, $scope._.g));
const $p = /*@__PURE__*/ _let(6, $if_content__p);
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
