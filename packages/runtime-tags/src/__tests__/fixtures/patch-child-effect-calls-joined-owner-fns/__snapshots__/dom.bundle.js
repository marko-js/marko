// tags/label-view.marko
const $get__script = _script("b0", ($scope) => {
	$scope.a.textContent = $scope.h();
	console.log("run", $scope.h());
});

// template.marko
const $up = ($scope) => () => "U" + $scope.d;
const $low = ($scope) => () => "l" + $scope.d;
_bind_resume("a0 d", $up);
_bind_resume("a1 d", $low);
