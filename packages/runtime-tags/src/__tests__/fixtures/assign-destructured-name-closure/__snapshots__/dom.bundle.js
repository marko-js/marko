// template.marko
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$scope.d.open = true;
	});
	_on($scope.c, "click", function() {
		console.log("read", $scope.d.open);
	});
});
