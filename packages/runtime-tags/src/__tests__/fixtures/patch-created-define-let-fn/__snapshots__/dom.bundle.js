// tags/card.marko
const $f = _let(5, ($scope) => _text($scope.b, $scope.f()));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$f($scope, () => "x");
}));
