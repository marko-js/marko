// tags/counter.marko
const $input__script = _script("b1", ($scope) => {
	console.log(JSON.stringify($scope.d));
	_on($scope.a, "click", function() {
		$scope.d.countChange($scope.d.count + 1);
	});
});
const $input = /*@__PURE__*/ _const(3, ($scope) => {
	$input_countChange($scope, $scope.d.countChange);
	$input__script($scope);
});
const $input_countChange__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$scope.e(0);
}));
const $input_countChange = /*@__PURE__*/ _const(4, $input_countChange__script);

// template.marko
const $n = /*@__PURE__*/ _let(2, ($scope) => {
	$input($scope.a, {
		count: $scope.c,
		countChange: $countChange($scope)
	});
	_text($scope.b, $scope.c);
});
const $countChange = ($scope) => (_new_n) => $n($scope, _new_n);
_resumed.a0 = $countChange;
