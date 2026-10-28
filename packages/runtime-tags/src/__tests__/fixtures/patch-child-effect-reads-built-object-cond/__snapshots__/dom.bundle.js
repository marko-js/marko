// tags/child.marko
const $input_item__script = _script("b0", ($scope) => {
	$scope.a.textContent = JSON.stringify($scope.d);
	console.log("run", JSON.stringify($scope.d));
});
