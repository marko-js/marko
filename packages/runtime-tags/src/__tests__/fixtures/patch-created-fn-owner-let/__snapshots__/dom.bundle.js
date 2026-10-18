// tags/card.marko
const $f = /*@__PURE__*/ _fill_let("b1", 5, ($scope) => _text($scope.b, $scope.f()));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$f($scope, () => "x");
}));

// tags/outer.marko
const $fn$1 = ($scope) => function() {
	return $scope.d ? $scope.c.fn() : "-";
};
_resumed.c0 = $fn$1;

// template.marko
const $fn = ($scope) => function() {
	return "f:" + $scope._.e;
};
_resumed.a0 = $fn;
