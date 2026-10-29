// template.marko
const $await_content__input_w = _resumed.a6 = /*@__PURE__*/ _fill_join_closure("a2", 5, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.b, $scope._.f), 0, "a0"), 0);
const $await_content__r = ($scope, r) => _text($scope.a, r);
const $await_content__$params = ($scope, $params2) => $await_content__r($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(1, $await_content__$params);
const $x = /*@__PURE__*/ _let(6, ($scope) => $await_promise($scope, Promise.resolve($scope.g)));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$x($scope, "z");
}));
