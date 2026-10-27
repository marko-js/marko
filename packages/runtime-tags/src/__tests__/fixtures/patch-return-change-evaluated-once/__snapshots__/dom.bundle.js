// tags/counter-box/index.marko
const $count$1 = /*@__PURE__*/ _fill_let("b1", 5, ($scope) => {
	_text($scope.a, $scope.f);
	_return($scope, $scope.f);
});
const $valueChange = ($scope) => function(v) {
	$count$1($scope, v);
};
_resumed.b0 = $valueChange;

// template.marko
const $setup__script = _script("a1", ($scope) => _on($scope.d, "click", function() {
	_var_change($scope.a, +$scope.g + 1);
}));
const $count = _var_resume("a0", /*@__PURE__*/ _const(6));
