// template.marko
const $read = _let(3, ($scope) => _text($scope.c, $scope.d));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$read($scope, $scope.$.brand);
}));
