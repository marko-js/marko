// template.marko
const $pick__script = _script("a2", ($scope) => {
	$scope.a.textContent = $scope.i();
	console.log("run", $scope.i());
});
const $up = ($scope) => () => "U" + $scope.d;
const $low = ($scope) => () => "l" + $scope.d;
_resumed.a0 = $up;
_resumed.a1 = $low;
