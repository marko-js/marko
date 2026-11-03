// tags/label-view.marko
const $input__script = _script("b0", ($scope) => {
	$scope.a.textContent = $scope.c.get();
	console.log("run", $scope.c.get());
});

// template.marko
const $up = ($scope) => () => "U" + $scope.d;
const $low = ($scope) => () => "l" + $scope.d;
_resumed.a0 = $up;
_resumed.a1 = $low;
