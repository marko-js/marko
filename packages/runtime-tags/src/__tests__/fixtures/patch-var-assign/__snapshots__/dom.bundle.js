// tags/counter-box/index.marko
const $count$1 = /*@__PURE__*/ _fill_let("b0", 4, ($scope) => {
	_text($scope.a, $scope.e);
	_return($scope, $scope.e);
});
const $valueChange = ($scope) => function(v) {
	$count$1($scope, v);
};
_resume("b0", $valueChange);

// template.marko
const $count = _var_resume("a0", /*@__PURE__*/ _const(4, ($scope) => _text($scope.c, $scope.e)));
const $setup__script = _script("a1", ($scope) => _on($scope.d, "click", function() {
	_var_change($scope.a, +$scope.e + 1);
}));
