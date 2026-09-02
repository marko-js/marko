// tags/kid.marko
const $c = /*@__PURE__*/ _fill_let("b0", 2, ($scope) => {
	_text($scope.b, $scope.c);
	_return($scope, $scope.c);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, +$scope.c + 1);
}));

// template.marko
const $x = _var_resume("a0", ($scope, x) => _text($scope.c, x));
