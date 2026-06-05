// template.marko
const $open = /* @__PURE__ */ _let(3, ($scope) => {
	_attr_details_or_dialog_open_default($scope, "a", $scope.d);
	_attr_details_or_dialog_open($scope, "b", $scope.d, void 0);
});
const $setup__script = _script("a0", ($scope) => {
	_attr_details_or_dialog_open_script($scope, "b");
	_on($scope.c, "click", function() {
		$open($scope, true);
	});
});
