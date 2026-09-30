// tags/child.marko
const $x = /*@__PURE__*/ _let_change(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$x($scope, 5);
}));

// template.marko
const $out = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $onChange = ($scope) => (next) => {
	$out($scope, String(next));
};
_resumed.a0 = $onChange;
