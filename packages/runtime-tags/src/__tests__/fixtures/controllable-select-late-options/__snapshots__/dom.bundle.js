// template.marko
const $v__OR__calls = /*@__PURE__*/ _or(6, ($scope) => _attr_select_value($scope, "a", $scope.e, $valueChange($scope)));
const $v = /*@__PURE__*/ _let(4, ($scope) => {
	_text($scope, "c", $scope.e);
	$v__OR__calls($scope);
});
const $calls = /*@__PURE__*/ _let(5, ($scope) => {
	_text($scope, "d", $scope.f);
	$v__OR__calls($scope);
});
const $setup__script = _script("a1", ($scope) => _attr_select_value_script($scope, "a"));
const $valueChange = ($scope) => function(nv) {
	$calls($scope, +$scope.f + 1);
	$v($scope, nv);
};
_resume("a0", $valueChange);
