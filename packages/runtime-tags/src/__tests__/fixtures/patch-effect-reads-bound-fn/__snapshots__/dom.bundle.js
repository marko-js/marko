// template.marko
const $getTitle2__script = _script_patch("a1 e d", ($scope) => {
	$scope.a.textContent = $scope.e();
	console.log("run", $scope.e());
});
const $getTitle = ($scope) => () => $scope.d;
_bind_resume("a0 d", $getTitle);
