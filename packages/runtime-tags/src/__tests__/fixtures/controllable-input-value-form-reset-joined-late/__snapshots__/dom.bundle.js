// template.marko
const $show = /*@__PURE__*/ _show(3, 1);
const $visible = /*@__PURE__*/ _let(5, ($scope) => $show($scope, $scope.f));
const $v = /*@__PURE__*/ _let(6, ($scope) => {
	_attr_input_value($scope, "c", $scope.g, $valueChange($scope));
	_text($scope.e, $scope.g);
});
const $setup__script = _script("a1", ($scope) => {
	_on($scope.a, "click", function() {
		$visible($scope, true);
	});
	_attr_input_value_script($scope, "c");
});
const $valueChange = ($scope) => (_new_v) => {
	$v($scope, _new_v);
};
_resumed.a0 = $valueChange;
