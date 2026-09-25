// template.marko
const $state_box__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	console.log("read", $scope.d.open, $scope.d?.open);
}));
const $box = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$scope.d.open = true;
}));
