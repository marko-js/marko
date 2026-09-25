// template.marko
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		if ($scope.f) $scope.f.open = true;
	});
	_on($scope.b, "click", function() {
		console.log("read", $scope.f?.open);
	});
});
