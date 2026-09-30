// template.marko
const $out = /*@__PURE__*/ _let(3, ($scope) => _text($scope.c, $scope.d));
const $x = /*@__PURE__*/ _let_change(5, ($scope) => _text($scope.b, $scope.f));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$x($scope, 5);
}));
const $onChange = ($scope) => (next) => {
	$out($scope, String(next));
};
_resumed.a0 = $onChange;
