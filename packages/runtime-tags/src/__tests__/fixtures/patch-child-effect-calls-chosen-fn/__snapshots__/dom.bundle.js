// tags/label.marko
const $get__script = _script("b0", ($scope) => {
	$scope.a.textContent = $scope.d();
	console.log("run", $scope.d());
});

// template.marko
const $up = ($scope) => () => "U" + $scope.d;
const $low = ($scope) => () => "l" + $scope.d;
_bind_resume("a0 d", $up);
_bind_resume("a1 d", $low);
