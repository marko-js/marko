// template.marko
const $item__script = _script_patch("a0 g", ($scope) => {
	$scope.a.textContent = JSON.stringify($scope.g);
	console.log("run", JSON.stringify($scope.g));
});
