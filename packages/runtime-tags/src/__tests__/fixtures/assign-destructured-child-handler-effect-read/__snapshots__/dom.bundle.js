// tags/picker.marko
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$scope.d();
}));
const $input_onPick = /*@__PURE__*/ _const(3);

// tags/counter.marko
const $input__script = _script("b1", ($scope) => console.log(JSON.stringify($scope.c)));
const $input = /*@__PURE__*/ _const(2, ($scope) => {
	$input_countChange($scope, $scope.c.countChange);
	$input__script($scope);
});
const $input_countChange = /*@__PURE__*/ _const(3, ($scope) => $input_onPick($scope.a, $onPick($scope)));
const $onPick = ($scope) => function() {
	$scope.d(5);
};
_resumed.b0 = $onPick;

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
