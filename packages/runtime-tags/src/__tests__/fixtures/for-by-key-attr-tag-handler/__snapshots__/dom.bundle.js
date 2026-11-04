// tags/menu.marko
const $for_content__setup = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$scope.e();
}));

// template.marko
const $onSelect = ($locals) => function() {
	const $scope = $locals._;
	document.getElementById("log").textContent = $scope.M + $locals.j;
};
_resumed.a0 = $onSelect;
