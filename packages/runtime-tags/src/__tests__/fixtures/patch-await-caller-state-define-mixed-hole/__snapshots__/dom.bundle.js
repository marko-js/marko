// tags/show-await.marko
const $await_content__text__OR__x = /*@__PURE__*/ _or_patch("b1", 3, ($scope) => _text($scope.a, $scope.c + ":" + $scope._.d));
const $await_content__x = /*@__PURE__*/ _const(2, $await_content__text__OR__x);
const $await_content__$params = ($scope, $params3) => $await_content__x($scope, $params3[0]);
const $Row_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $Row_content__input_promise = /*@__PURE__*/ _closure_get_patch("b6", 5, ($scope) => $Row_content__await_promise($scope, $scope._.d));
const $input_promise__closure = /*@__PURE__*/ _closure($Row_content__input_promise);
const $input_promise = /*@__PURE__*/ _const(3, $input_promise__closure);

// template.marko
const $p = _let(6, ($scope) => $input_promise($scope.b, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
