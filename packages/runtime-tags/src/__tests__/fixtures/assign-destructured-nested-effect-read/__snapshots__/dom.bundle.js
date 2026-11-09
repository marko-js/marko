// tags/counter.marko
const $input__script = _script("b0", ($scope) => {
	console.log(JSON.stringify($scope.d));
	_on($scope.b, "click", function() {
		$scope.d.obj.countChange($scope.d.obj.count + 1);
	});
});
const $input = /*@__PURE__*/ _const(3, ($scope) => {
	_text($scope.a, $scope.d.obj.label);
	$input__script($scope);
});

// template.marko
const $n = /*@__PURE__*/ _let(2, ($scope) => {
	$input($scope.a, { obj: {
		label: "x",
		count: $scope.c,
		countChange: $obj($scope)
	} });
	_text($scope.b, $scope.c);
});
const $obj = ($scope) => function(v) {
	$n($scope, v);
};
_resumed.a0 = $obj;
