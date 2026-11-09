// tags/child/index.marko
const $count = /*@__PURE__*/ _let(1, ($scope) => {
	_return($scope, {
		count: $scope.b,
		inc: $_return($scope)
	});
	_text($scope.a, $scope.b);
});
const $_return = ($scope) => function() {
	$count($scope, +$scope.b + 1);
};
_resumed.b0 = $_return;

// template.marko
const $pattern2 = _var_resume("a0", ($scope, $pattern) => {
	_text($scope.d, $pattern.count);
	$inc($scope, $pattern.inc);
});
const $inc = /*@__PURE__*/ _const(6);
const $setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$scope.g();
}));
