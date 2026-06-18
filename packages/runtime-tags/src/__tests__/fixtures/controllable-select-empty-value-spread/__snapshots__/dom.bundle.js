// template.marko
const $value = /* @__PURE__ */ _let(3, ($scope) => {
	_attr_select_value($scope, "a", $scope.d, $valueChange($scope));
	_text($scope.c, $scope.d === void 0 ? "undefined" : "value=" + $scope.d);
});
const $placeholder__script = _script("a1", ($scope) => _attrs_script($scope, "b"));
const $setup__script = _script("a2", ($scope) => _attr_select_value_script($scope, "a"));
function $valueChange($scope) {
	return function(v) {
		$value($scope, v);
	};
}
_resume("a0", $valueChange);
