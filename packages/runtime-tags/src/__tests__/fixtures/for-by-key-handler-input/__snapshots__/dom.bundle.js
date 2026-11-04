// tags/dismiss-button.marko
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$scope.e();
}));

// template.marko
const $onDismiss = ($scope) => function() {
	document.getElementById("log").textContent = $scope.M;
};
_resumed.a0 = $onDismiss;
