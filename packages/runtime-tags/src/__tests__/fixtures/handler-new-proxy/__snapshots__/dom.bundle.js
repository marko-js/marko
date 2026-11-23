// template.marko
const $increment__script = _script("a1", ($scope) => _on($scope.c, "click", $scope.i));
const $increment = /*@__PURE__*/ _const(8, $increment__script);
const $count__script = _script("a2", ($scope) => _on($scope.a, "click", new Proxy(() => $count($scope, +$scope.h + 1) - 1, {})));
const $count = /*@__PURE__*/ _let(7, ($scope) => {
	_text($scope.b, $scope.h);
	_text($scope.d, $scope.h);
	$increment($scope, new Proxy(() => $count($scope, +$scope.h + 1) - 1, {}));
	$count__script($scope);
});
const $b = /*@__PURE__*/ _let_change(12, ($scope) => _text($scope.g, $scope.m));
const $a = /*@__PURE__*/ _let_change(10, ($scope) => _text($scope.f, $scope.k));
const $setup__script = _script("a0", ($scope) => _on($scope.e, "click", function() {
	$a($scope, 2);
	$b($scope, 3);
}));
