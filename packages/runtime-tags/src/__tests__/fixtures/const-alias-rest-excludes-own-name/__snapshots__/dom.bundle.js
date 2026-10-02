// template.marko
const $o = /*@__PURE__*/ _let(3, ($scope) => {
	$rest($scope, (({ rest: $rest2, ...rest }) => rest)($scope.d));
	$x($scope, $scope.d.rest);
});
const $rest__script = _script("a1", ($scope) => _attrs_script($scope, "a"));
const $rest = /*@__PURE__*/ _const(5, ($scope) => {
	_attrs($scope, "a", $scope.f);
	$rest__script($scope);
});
const $x = /*@__PURE__*/ _const(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$o($scope, {
		rest: 3,
		a: 4
	});
}));
