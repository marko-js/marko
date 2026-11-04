// tags/card.marko
const $await_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $n = _fill_let("b2", 4, ($scope) => $await_promise($scope, Promise.resolve($scope.e)));

// template.marko
const $c = _let(8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, +$scope.i + 1);
}));
