// tags/show-await.marko
const $await_content__input_label__OR__x = /*@__PURE__*/ _or(3, ($scope) => _text($scope.a, $scope._.e + ":" + $scope.c));
const $await_content__x = /*@__PURE__*/ _const(2, $await_content__input_label__OR__x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;

// template.marko
const $p = /*@__PURE__*/ _let(6, ($scope) => $input_promise($scope.b, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
