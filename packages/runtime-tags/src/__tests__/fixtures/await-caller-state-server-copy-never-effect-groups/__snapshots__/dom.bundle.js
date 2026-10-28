// tags/show-await.marko
const $await_content__x__script = _script("b0", ($scope) => document.body.dataset.v = String($scope.c));
const $await_content__x = /*@__PURE__*/ _const(2, ($scope) => {
	_text($scope.a, $scope.c);
	$await_content__x__script($scope);
});
const $await_content__$params = ($scope, $params3) => $await_content__x($scope, $params3[0]);
const $Row_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $Row_content__input_promise__OR__text = /*@__PURE__*/ _or(4, ($scope) => $Row_content__await_promise($scope, $scope.d && $scope._.d));
const $Row_content__input_promise = /*@__PURE__*/ _closure_get(5, $Row_content__input_promise__OR__text, 0, "b2");
const $input_promise__closure = /*@__PURE__*/ _closure($Row_content__input_promise);
const $input_promise = /*@__PURE__*/ _const(3, $input_promise__closure);

// template.marko
const $p = /*@__PURE__*/ _let(6, ($scope) => $input_promise($scope.b, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
