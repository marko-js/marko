// template.marko
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$scope.d[$scope.c] = true;
		$scope.d.items[$scope.d.items.length - 1].done = true;
	});
	_on($scope.b, "click", function() {
		console.log("read", $scope.d.open, $scope.d.items[0].done);
	});
});
