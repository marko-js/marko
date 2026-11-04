// tags/show-await.marko
const $await_content__$params = ($scope, $params2) => _text($scope.b, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;

// template.marko
const $p = /*@__PURE__*/ _let(8, ($scope) => $input_promise($scope.c, $scope.i));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
