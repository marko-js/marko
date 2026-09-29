// tags/grandchild.marko
const $n = /*@__PURE__*/ _let(1, ($scope) => {
	_return($scope, {
		n: $scope.b,
		set: $_return($scope)
	});
	_text($scope.a, $scope.b);
});
const $_return = ($scope) => function(value) {
	$n($scope, value);
};
_resumed.c0 = $_return;

// tags/child.marko
const $g = _var_resume("b0", /*@__PURE__*/ _const(2, ($scope) => _return($scope, $scope.c)));

// template.marko
_dynamic_tag_var_resume(0);
const $a__OR__v_n = /*@__PURE__*/ _or(8, ($scope) => _text($scope.d, $scope.e + ":" + $scope.h), 1, 1);
const $a = /*@__PURE__*/ _let(4, $a__OR__v_n);
const $setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$a($scope, +$scope.e + 1);
	$scope.g.set($scope.e);
}));
const $v = _var_resume("a0", /*@__PURE__*/ _const(6, ($scope) => $v_n($scope, $scope.g?.n)));
const $v_n = /*@__PURE__*/ _const(7, $a__OR__v_n);
