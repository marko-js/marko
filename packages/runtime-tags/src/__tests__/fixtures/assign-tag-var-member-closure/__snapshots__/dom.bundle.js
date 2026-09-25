// template.marko
const $setup__script = _script("a0", ($scope) => {
	_on($scope.c, "click", function() {
		$scope.e.open = true;
	});
	_on($scope.d, "click", function() {
		console.log("read", $scope.e?.open);
	});
});
