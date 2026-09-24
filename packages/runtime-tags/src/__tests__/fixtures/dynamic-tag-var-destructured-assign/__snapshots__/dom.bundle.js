// tags/a.marko
const $value$2 = /*@__PURE__*/ _let(1, ($scope) => {
	_return($scope, {
		value: $scope.b,
		valueChange: $_return$1($scope)
	});
	_text($scope.a, $scope.b);
});
const $_return$1 = ($scope) => function(v) {
	$value$2($scope, v);
};
_resumed.b0 = $_return$1;

// tags/b.marko
const $value$1 = /*@__PURE__*/ _let(1, ($scope) => {
	_return($scope, {
		value: $scope.b,
		valueChange: $_return($scope)
	});
	_text($scope.a, $scope.b);
});
const $_return = ($scope) => function(v) {
	$value$1($scope, v);
};
_resumed.c0 = $_return;

// template.marko
const $pattern2 = _var_resume("a0", ($scope, $pattern) => {
	$value($scope, $pattern.value);
	$valueChange2($scope, $pattern.valueChange);
});
const $value__OR__$valueChange = /*@__PURE__*/ _or(10, _script("a1", ($scope) => _on($scope.c, "click", function() {
	$scope.j(+$scope.i + 1);
})), 1, 1);
const $value = /*@__PURE__*/ _const(8, ($scope) => {
	_text($scope.d, $scope.i);
	$value__OR__$valueChange($scope);
});
const $valueChange2 = /*@__PURE__*/ _const(9, $value__OR__$valueChange);
