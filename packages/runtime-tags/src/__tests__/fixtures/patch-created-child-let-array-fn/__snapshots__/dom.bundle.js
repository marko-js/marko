// tags/card.marko
const $o = _let(5, ($scope) => _text($scope.b, $scope.f[0]()));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$o($scope, [() => "x"]);
}));
