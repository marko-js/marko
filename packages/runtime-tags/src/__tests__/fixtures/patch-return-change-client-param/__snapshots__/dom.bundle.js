// tags/counter-box/index.marko
const $count$1 = _let(4, ($scope) => {
	_return($scope, $scope.e);
	_text($scope.a, $scope.e);
});
const $input_onChange = /*@__PURE__*/ _const(3, ($scope) => _return_change($scope, $scope.d));

// template.marko
const $mode = _let(5, ($scope) => $input_onChange($scope.a, $scope.f === "a" ? $onChange($scope) : $onChange2($scope)));
const $last = _let(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("a3", ($scope) => {
	_on($scope.d, "click", function() {
		$mode($scope, "b");
	});
	_on($scope.e, "click", function() {
		_var_change($scope.a, 5);
	});
});
const $count = _var_resume("a2", ($scope, count) => {});
const $onChange2 = ($scope) => function(v) {
	$last($scope, "b" + v);
};
const $onChange = ($scope) => function(v) {
	$last($scope, "a" + v);
};
_resumed.a1 = $onChange2;
_resumed.a0 = $onChange;
