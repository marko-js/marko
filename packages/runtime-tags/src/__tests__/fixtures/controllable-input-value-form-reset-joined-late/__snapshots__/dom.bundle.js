// template.marko
const $show = /*@__PURE__*/ _show(2);
const $visible = /*@__PURE__*/ _let(4, ($scope) => $show($scope, $scope.e));
const $v = /*@__PURE__*/ _let(5, ($scope) => {
	_attr_input_value($scope, "b", $scope.f, $valueChange($scope));
	_text($scope.d, $scope.f);
});
const $setup__script = _script("a1", ($scope) => {
	_on($scope.a, "click", function() {
		$visible($scope, true);
	});
	_attr_input_value_script($scope, "b");
});
const $valueChange = ($scope) => (_new_v) => $v($scope, _new_v);
_resumed.a0 = $valueChange;
