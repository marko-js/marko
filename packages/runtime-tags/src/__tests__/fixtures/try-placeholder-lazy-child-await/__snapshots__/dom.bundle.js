// template.marko
const $placeholder_content = /*@__PURE__*/ _content("b0", "loading");
pendingEnabled && (_resumed.b0 = $placeholder_content);
const $clicks = /*@__PURE__*/ _let(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script("b2", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope, +$scope.d + 1);
}));

// child.marko
const $await_content__v = ($scope, v) => _text($scope.a, v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(1, $await_content__$params);
const $n = /*@__PURE__*/ _let(2, ($scope) => $await_promise($scope, $scope.c ? resolveAfter($scope.c) : $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.c + 1);
}));
