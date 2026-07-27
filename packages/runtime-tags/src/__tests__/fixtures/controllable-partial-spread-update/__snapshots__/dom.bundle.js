// template.marko
_enable_controllable_input();
const $v = /*@__PURE__*/ _let(3, ($scope) => {
	_attr_input_value($scope, "b", $scope.d, $valueChange($scope));
	_text($scope.c, $scope.d);
});
const $rest__script = _script("a1", ($scope) => _attrs_script($scope, "b"));
const $rest = /*@__PURE__*/ _let(4, ($scope) => {
	_attrs_partial($scope, "b", $scope.e, {
		value: 1,
		valueChange: 1
	});
	$rest__script($scope);
});
const $setup__script = _script("a2", ($scope) => {
	_on($scope.a, "click", function() {
		$rest($scope, { placeholder: "q" });
	});
	_attr_input_value_script($scope, "b");
});
function $valueChange($scope) {
	return (_new_v) => {
		$v($scope, _new_v);
	};
}
_resume("a0", $valueChange);
