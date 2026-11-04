// template.marko
const $pick__script = _script_patch("a2 i d", ($scope) => {
	$scope.a.textContent = $scope.i();
	console.log("run", $scope.i());
});
const $up = ($scope) => () => "U" + $scope.d;
const $low = ($scope) => () => "l" + $scope.d;
_bind_resume("a0 d", $up);
_bind_resume("a1 d", $low);
