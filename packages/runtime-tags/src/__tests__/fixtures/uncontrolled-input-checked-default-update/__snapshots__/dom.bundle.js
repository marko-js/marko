// template.marko
const $checked = /* @__PURE__ */ _let(3, ($scope) => {
	_attr_input_checked_default($scope, "a", $scope.d);
	_attr_input_checked($scope, "b", $scope.d, void 0);
});
const $setup__script = _script("a0", ($scope) => {
	_attr_input_checked_script($scope, "b");
	_on($scope.c, "click", function() {
		$checked($scope, true);
	});
});
