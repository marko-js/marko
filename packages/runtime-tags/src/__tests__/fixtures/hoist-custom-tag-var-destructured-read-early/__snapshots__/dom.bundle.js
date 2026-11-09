// tags/child.marko
const $_return = ($scope) => () => $scope.a;
_resumed.b0 = $_return;

// template.marko
const $get_getter = /*@__PURE__*/ _hoist(6);
const $log = /*@__PURE__*/ _let(4, ($scope) => _text($scope.d, $scope.e));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$log($scope, `${Object.keys($scope.f).join()}:${$get_getter($scope)()}`);
}));
