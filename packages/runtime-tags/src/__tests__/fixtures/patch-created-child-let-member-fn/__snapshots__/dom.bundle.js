// tags/card.marko
const $o = /*@__PURE__*/ _fill_let("b1", 5, ($scope) => _text($scope.b, $scope.f.fn()));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$o($scope, { fn: () => "x" });
}));

// template.marko
const $opts = ($scope) => function() {
	return "f:" + $scope._.e;
};
_resumed.a0 = $opts;
