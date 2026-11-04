// tags/counter.marko
const $n = /*@__PURE__*/ _fill_let("b1", 6, ($scope) => {
	_text($scope.c, $scope.g);
	_return($scope, $scope.g);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));

// template.marko
const $count__script = _script("a1", ($scope) => $scope.c.dataset.count = String($scope.j));
const $count = _fill_var_resume("a0", /*@__PURE__*/ _const(9, ($scope) => {
	_text($scope.d, $scope.j);
	$count__script($scope);
}));
