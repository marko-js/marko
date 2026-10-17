// template.marko
const $v = /*@__PURE__*/ _fill_let("a4", 11, ($scope) => {
	_attr_select_value($scope, "a", $scope.l, $valueChange($scope));
	_text($scope.e, $scope.l);
});
const $setup__script = _script("a3", ($scope) => {
	_attr_select_value_script($scope, "a");
	_on($scope.f, "click", function() {
		$v($scope, $scope.l === "b" ? "c" : "b");
	});
});
const $input_a__script = _script("a2", ($scope) => _attrs_script($scope, "b"));
const $input_c__script = _script("a1", ($scope) => _attrs_script($scope, "d"));
const $valueChange = ($scope) => (_new_v) => {
	$v($scope, _new_v);
};
_resumed.a0 = $valueChange;
