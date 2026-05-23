// total: 4015 (min) 1815 (brotli)
// template.marko: 178 (min) 118 (brotli)
const $value = /* @__PURE__ */ _let(2, ($scope) => {
	_attr_select_value($scope, "a", $scope.c, $valueChange($scope));
	_text($scope.b, $scope.c);
});
const $setup__script = _script("a1", ($scope) => _attr_select_value_script($scope, "a"));
function $valueChange($scope) {
	return function(v) {
		$value($scope, v);
	};
}
_resume("a0", $valueChange);
