// template.marko
const $item__script = _script("a0", ($scope) => {
	$scope.a.textContent = JSON.stringify($scope.g);
	console.log("run", JSON.stringify($scope.g));
});
