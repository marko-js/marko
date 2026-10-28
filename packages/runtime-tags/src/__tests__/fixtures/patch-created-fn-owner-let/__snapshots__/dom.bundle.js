// tags/card.marko
const $f = _let(5, ($scope) => _text($scope.b, $scope.f()));
const $input_fn = $f;
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$f($scope, () => "x");
}));

// tags/outer.marko
const $input__OR__open = /*@__PURE__*/ _or_resume("c0", 4, ($scope) => $input_fn($scope.a, function() {
	return $scope.d ? $scope.c.fn() : "-";
}));
const $open = _let(3, $input__OR__open);
