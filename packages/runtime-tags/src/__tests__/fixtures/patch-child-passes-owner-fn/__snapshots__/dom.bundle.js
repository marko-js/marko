// tags/label.marko
const $get__script = _script("b0", ($scope) => {
	$scope.a.textContent = $scope.d();
	console.log("run", $scope.d());
});

// template.marko
const $getTitle = ($scope) => () => $scope.d;
_bind_resume("a0 d", $getTitle);
