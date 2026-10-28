// tags/child.marko
const $x = /*@__PURE__*/ _let(4, ($scope) => {
	_return($scope, $scope.e);
	_return_change($scope, $valueChange($scope));
	_text($scope.a, $scope.e);
});
const $valueChange = ($scope) => function(v) {
	$x($scope, $scope.e === v ? $scope.e : v);
};
_resumed.b0 = $valueChange;

// template.marko
const $c = _var_resume("a0", /*@__PURE__*/ _const(7, ($scope) => _text($scope.c, $scope.h)));
const $setup__script = _script("a1", ($scope) => _on($scope.d, "click", function() {
	_var_change($scope.a, $scope.h + "!");
}));
