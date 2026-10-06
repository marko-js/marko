// tags/child.marko
const $n = /*@__PURE__*/ _let(0, ($scope) => _return($scope, {
	n: $scope.a,
	set: $_return($scope)
}));
const $_return = ($scope) => function(value) {
	$n($scope, value);
};
_resumed.b0 = $_return;

// template.marko
_dynamic_tag_var_resume(0);
const $for_content__setup__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	$scope.e.set($scope.e.n + 1);
}));
const $for_content__row = _var_resume("a1", /*@__PURE__*/ _const(4, ($scope) => $for_content__row_n($scope, $scope.e?.n)));
const $for_content__row_n = ($scope, row_n) => _text($scope.d, row_n);
const $setup__script = _script("a3", ($scope) => _on($scope.c, "click", function() {
	$scope.g.set($scope.g.n + 1);
}));
const $v = _var_resume("a0", /*@__PURE__*/ _const(6, ($scope) => $v_n($scope, $scope.g?.n)));
const $v_n = ($scope, v_n) => _text($scope.d, v_n);
