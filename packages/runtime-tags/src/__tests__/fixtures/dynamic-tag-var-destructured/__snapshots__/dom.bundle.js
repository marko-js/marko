// tags/child/index.marko
const $count$1 = /*@__PURE__*/ _let(1, ($scope) => {
	_return($scope, {
		count: $scope.b,
		inc: $_return($scope)
	});
	_text($scope.a, $scope.b);
});
function $_return($scope) {
	return function() {
		$count$1($scope, $scope.b + 1);
	};
}
_resume("b0", $_return);

// template.marko
const $pattern2 = _var_resume("a0", ($scope, $pattern) => {
	$count($scope, $pattern.count);
	$inc($scope, $pattern.inc);
});
const $count = ($scope, count) => _text($scope.d, count);
const $inc = /*@__PURE__*/ _const(6, _script("a1", ($scope) => _on($scope.c, "click", function() {
	$scope.g();
})));
