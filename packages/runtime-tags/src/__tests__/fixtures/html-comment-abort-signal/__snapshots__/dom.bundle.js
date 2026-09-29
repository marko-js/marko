// template.marko
const $count = /*@__PURE__*/ _let(3, ($scope) => {
	$signalReset($scope, 0);
	_text($scope.a, `${_to_text($scope.d)} ${_to_text($signal($scope, 0).aborted ? "aborted" : "active")}`);
	_text($scope.c, $scope.d);
});
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.d + 1);
}));
