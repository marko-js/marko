// tags/outer.marko
const $await_content__v = ($scope, v) => _text($scope.a, v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(2, $await_content__$params);
const $p = /*@__PURE__*/ _let(8, ($scope) => $await_promise($scope, $scope.i));
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$p($scope, 0);
}));
