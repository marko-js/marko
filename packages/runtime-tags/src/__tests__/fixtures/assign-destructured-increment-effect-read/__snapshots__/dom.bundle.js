// tags/counter.marko
const $input__script = _script("b0", ($scope) => {
	console.log(JSON.stringify($scope.c));
	_on($scope.a, "click", function() {
		$scope.c.countChange(+$scope.c.count + 1);
	});
});
const $input = /*@__PURE__*/ _const(2, $input__script);

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
