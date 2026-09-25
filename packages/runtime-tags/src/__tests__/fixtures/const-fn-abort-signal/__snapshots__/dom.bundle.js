// template.marko
const $start2 = /*@__PURE__*/ _const(5);
const $id = /*@__PURE__*/ _let(3, ($scope) => {
	$signalReset($scope, 0);
	$start2($scope, $start($scope));
});
const $status = /*@__PURE__*/ _let(4, ($scope) => _text($scope.c, $scope.e));
const $setup__script = _script("a1", ($scope) => {
	_on($scope.a, "click", function() {
		$scope.f();
	});
	_on($scope.b, "click", function() {
		$id($scope, +$scope.d + 1);
	});
});
const $start = ($scope) => function() {
	const myId = $scope.d;
	$signal($scope, 0).onabort = () => {
		$status($scope, "aborted " + myId);
	};
	$status($scope, "started " + myId);
};
_resumed.a0 = $start;
