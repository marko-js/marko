// components/child.marko
const $input_onClick__script = _script("b0", ($scope) => _on($scope.a, "click", $scope.d));
const $input_onClick = /*@__PURE__*/ _const(3, $input_onClick__script);

// template.marko
const $if_content__inc = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_onClick($scope.a, $scope._.i));
const $inc2 = /*@__PURE__*/ _const(8, $if_content__inc);
const $input_step__OR__count = /*@__PURE__*/ _or(7, ($scope) => $inc2($scope, $inc($scope)));
const $count = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$input_step__OR__count($scope);
});
const $inc = ($scope) => () => {
	$count($scope, $scope.g + $scope.e);
};
_resumed.a0 = $inc;
