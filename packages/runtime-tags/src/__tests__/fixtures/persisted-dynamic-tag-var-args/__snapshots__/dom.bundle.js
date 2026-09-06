// counter.marko
const $n$1 = /*@__PURE__*/ _fill_let("a0", 4, ($scope) => {
	_text($scope.b, $scope.e);
	_return($scope, $scope.e);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$n$1($scope, +$scope.e + 1);
}));
const $valueChange = ($scope) => function(v) {
	$n$1($scope, v);
};
_resume("a0", $valueChange);

// template.marko
const $n = _var_resume("b0", ($scope, n) => _text($scope.c, n));
