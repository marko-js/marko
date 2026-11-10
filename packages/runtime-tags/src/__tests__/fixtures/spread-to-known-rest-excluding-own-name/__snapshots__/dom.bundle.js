// tags/child.marko
const $rest__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $rest = /*@__PURE__*/ _const(5, ($scope) => {
	_attrs($scope, "a", $scope.f);
	$rest__script($scope);
});
const $x = ($scope, x) => _text($scope.b, x);

// template.marko
const $o = /*@__PURE__*/ _let(2, ($scope) => {
	$x($scope.a, $scope.c.rest);
	$rest($scope.a, (({ rest: $rest, ...rest }) => rest)($scope.c));
});
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$o($scope, {
		rest: 3,
		a: 4
	});
}));
