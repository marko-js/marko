// tags/child.marko
const $count$1 = /*@__PURE__*/ _let(1, ($scope) => {
	_return($scope, {
		count: $scope.b,
		inc: $_return($scope),
		countChange: $_return2($scope)
	});
	_text($scope.a, $scope.b);
});
function $_return2($scope) {
	return function(value) {
		$count$1($scope, value);
	};
}
function $_return($scope) {
	return function() {
		$count$1($scope, $scope.b + 1);
	};
}
_resume("b1", $_return2);
_resume("b0", $_return);

// template.marko
const $pattern2 = _var_resume("a0", ($scope, $pattern) => {
	$count($scope, $pattern.count);
	$countChange2($scope, $pattern.countChange);
	$inc($scope, $pattern.inc);
	$missing2($scope, $pattern.missing);
});
const $count__OR__$countChange = /*@__PURE__*/ _or(9, _script("a1", ($scope) => _on($scope.d, "click", function() {
	$scope.i($scope.h + 10);
})), 1, 1);
const $count = /*@__PURE__*/ _const(7, ($scope) => {
	_text($scope.e, $scope.h);
	$count__OR__$countChange($scope);
});
const $countChange2 = /*@__PURE__*/ _const(8, $count__OR__$countChange);
const $inc = /*@__PURE__*/ _const(10, _script("a2", ($scope) => _on($scope.c, "click", function() {
	$scope.k();
})));
const $missing3 = ($scope, missing) => _text($scope.f, missing);
const $missing2 = ($scope, $missing) => $missing3($scope, void 0 !== $missing ? $missing : "fallback");
