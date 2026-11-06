// tags/child.marko
const $count$1 = /*@__PURE__*/ _let(1, ($scope) => {
	_return($scope, {
		count: $scope.b,
		inc: $_return($scope),
		countChange: $_return2($scope)
	});
	_text($scope.a, $scope.b);
});
const $_return2 = ($scope) => function(value) {
	$count$1($scope, value);
};
const $_return = ($scope) => function() {
	$count$1($scope, +$scope.b + 1);
};
_resumed.b1 = $_return2;
_resumed.b0 = $_return;

// template.marko
const $pattern2 = _var_resume("a0", ($scope, $pattern) => {
	$count($scope, $pattern.count);
	$countChange2($scope, $pattern.countChange);
	$inc($scope, $pattern.inc);
	$missing2($scope, $pattern.missing);
});
const $count = /*@__PURE__*/ _const(7, ($scope) => _text($scope.e, $scope.h));
const $countChange2__script = _script("a1", ($scope) => _on($scope.d, "click", function() {
	$scope.i($scope.h + 10);
}));
const $countChange2 = /*@__PURE__*/ _const(8, $countChange2__script);
const $inc = /*@__PURE__*/ _const(9);
const $missing2 = ($scope, $missing) => _text($scope.f, void 0 !== $missing ? $missing : "fallback");
const $setup__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	$scope.j();
}));
