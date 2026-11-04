// tags/card.marko
const $c = _let(5, ($scope) => _text($scope.b, $scope.f));
const $input_n = $c;
const $setup__script$1 = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, "y");
}));

// tags/outer.marko
const $o = /*@__PURE__*/ _fill_let("c1", 5, ($scope) => $p($scope, $scope.f));
const $p = ($scope) => $input_n($scope.b, $scope.f);
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$o($scope, "x");
}));
