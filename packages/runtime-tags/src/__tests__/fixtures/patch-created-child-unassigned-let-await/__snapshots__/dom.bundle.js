// tags/card.marko
const $await_content__x = ($scope, x) => _text($scope.a, x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = _resumed.b2 = /*@__PURE__*/ _await_content(0, "<p> </p>", "D ");
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $n = fill("b0", /*@__PURE__*/ _let(4, ($scope) => $await_promise($scope, Promise.resolve($scope.e))));

// template.marko
const $c = /*@__PURE__*/ _let(8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, +$scope.i + 1);
}));
