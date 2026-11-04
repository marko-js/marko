// template.marko
const $item__script = _script_patch("a0 e", ($scope) => {
	$scope.a.textContent = JSON.stringify($scope.e);
	console.log("run", JSON.stringify($scope.e));
});
