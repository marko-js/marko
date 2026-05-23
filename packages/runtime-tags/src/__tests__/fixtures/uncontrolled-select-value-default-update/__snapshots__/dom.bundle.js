// total: 4092 (min) 1870 (brotli)
// template.marko: 186 (min) 114 (brotli)
const $value = /* @__PURE__ */ _let(5, ($scope) => {
	_attr_select_value_default($scope, "c", $scope.f);
	_attr_select_value($scope, "d", $scope.f, void 0);
});
const $setup__script = _script("a0", ($scope) => {
	_attr_select_value_script($scope, "d");
	_on($scope.e, "click", function() {
		$value($scope, "b");
	});
});
