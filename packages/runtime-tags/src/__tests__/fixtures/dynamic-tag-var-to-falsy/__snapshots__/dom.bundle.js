// template.marko
const $clicks = /*@__PURE__*/ _let(7, ($scope) => _text($scope, "d", $scope.h));
const $setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$clicks($scope, $scope.h + ($scope.i ? 1 : -1));
}));
const $el = _var_resume("a0", /*@__PURE__*/ _const(8));
