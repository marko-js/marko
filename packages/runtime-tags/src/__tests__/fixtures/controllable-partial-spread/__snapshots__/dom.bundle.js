// template.marko
const $v__OR__rest__script = _script("a3", ($scope) => {
	_attrs_script($scope, "b");
	_attrs_script($scope, "c");
});
const $v__OR__rest = /* @__PURE__ */ _or(6, ($scope) => {
	_attrs($scope, "b", {
		checkedValue: $scope.e,
		...$scope.f
	});
	_attrs($scope, "c", {
		...$scope.f,
		checkedValue: $scope.e
	});
	$v__OR__rest__script($scope);
});
const $v__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$v($scope, $scope.e + "!");
}));
const $v = /* @__PURE__ */ _let(4, ($scope) => {
	_attr_input_value($scope, "d", $scope.e, $valueChange($scope));
	$v__OR__rest($scope);
	$v__script($scope);
});
const $rest__script = _script("a1", ($scope) => _attrs_script($scope, "d"));
const $setup__script = _script("a2", ($scope) => _attr_input_value_script($scope, "d"));
function $valueChange($scope) {
	return (_new_v) => {
		$v($scope, _new_v);
	};
}
_resume("a0", $valueChange);
