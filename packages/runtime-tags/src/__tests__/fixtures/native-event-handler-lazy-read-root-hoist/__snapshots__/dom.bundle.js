// tags/child.marko
const $_return = ($scope) => () => $scope.a;
_resumed.b0 = $_return;

// template.marko
const $get_getter = /*@__PURE__*/ _hoist(7);
const $log = /*@__PURE__*/ _let(5, ($scope) => _text($scope.e, $scope.f));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.c, "click", function() {
		$log($scope, Object.keys($scope.g).join());
	});
	_on($scope.d, "click", function() {
		$log($scope, `${$scope.g.n}:${$get_getter($scope)()}`);
	});
});
