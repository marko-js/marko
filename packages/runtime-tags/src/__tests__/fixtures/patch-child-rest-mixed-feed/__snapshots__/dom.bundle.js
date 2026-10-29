// template.marko
const $other = _let(5);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$other($scope, $scope.f + 1);
}));
