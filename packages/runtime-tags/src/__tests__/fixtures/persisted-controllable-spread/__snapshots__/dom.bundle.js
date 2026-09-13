// template.marko
const $value = /*@__PURE__*/ _let(5, ($scope) => {
	_attr_input_value($scope, "a", $scope.f, $valueChange($scope));
	_text($scope.b, $scope.f);
});
const $setup__script = _script("a2", ($scope) => _attr_input_value_script($scope, "a"));
const $input_attrs__script = _script("a1", ($scope) => _attrs_script($scope, "a"));
const $valueChange = ($scope) => function(v) {
	$value($scope, v);
};
_resume("a0", $valueChange);
