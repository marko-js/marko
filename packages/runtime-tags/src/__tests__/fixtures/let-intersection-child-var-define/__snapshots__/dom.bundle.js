// template.marko
const $Let_content__internal = /*@__PURE__*/ _let(0, ($scope) => _return($scope, $scope.a));
const $a__OR__b__script = _script("a3", ($scope) => _on($scope.c, "click", function() {
	_var_change($scope.a, $scope.e + 1);
	$b($scope, $scope.f + 1);
}));
const $a__OR__b = /*@__PURE__*/ _or(6, ($scope) => {
	_text($scope.d, `${$scope.e},${$scope.f}`);
	$a__OR__b__script($scope);
});
const $a = _var_resume("a2", /*@__PURE__*/ _const(4, $a__OR__b));
const $b = /*@__PURE__*/ _let(5, $a__OR__b);
function $valueChange($scope) {
	return (_new_internal) => {
		$Let_content__internal($scope, _new_internal);
	};
}
_resume("a0", $valueChange);
