// tags/child.marko
const $input_item__script = _script_patch("b0 d", ($scope) => {
	$scope.a.textContent = JSON.stringify($scope.d);
	console.log("run", JSON.stringify($scope.d));
});
