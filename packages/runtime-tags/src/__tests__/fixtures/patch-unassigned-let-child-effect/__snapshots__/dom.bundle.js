// tags/child.marko
const $input_v__script = _script("b0", ($scope) => console.log("v", $scope.e));
const $input_v = /*@__PURE__*/ _const(4, ($scope) => {
	_text($scope.a, $scope.e);
	$input_v__script($scope);
});

// template.marko
const $x = _let(5, ($scope) => $input_v($scope.a, $scope.f));
