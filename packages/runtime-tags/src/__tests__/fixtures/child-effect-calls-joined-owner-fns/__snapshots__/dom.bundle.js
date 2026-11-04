// tags/label-view.marko
const $get__script = _script("b0", ($scope) => {
	$scope.a.textContent = $scope.h();
	console.log("run", $scope.h());
});

// template.marko
const $up = ($scope) => () => "U" + $scope.d;
const $low = ($scope) => () => "l" + $scope.d;
_resumed.a0 = $up;
_resumed.a1 = $low;
