// tags/card.marko
const $o = /*@__PURE__*/ _let(5, ($scope) => _text($scope.b, $scope.f.fn()));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$o($scope, { fn: () => "x" });
}));
