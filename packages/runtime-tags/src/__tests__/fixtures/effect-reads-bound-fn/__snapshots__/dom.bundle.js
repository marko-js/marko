// template.marko
const $getTitle2__script = _script("a1", ($scope) => {
	$scope.a.textContent = $scope.e();
	console.log("run", $scope.e());
});
const $getTitle = ($scope) => () => $scope.d;
_resumed.a0 = $getTitle;
