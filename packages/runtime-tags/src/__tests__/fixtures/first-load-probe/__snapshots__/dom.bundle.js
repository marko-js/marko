// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a1", "loading…", "b");
const $qty = /*@__PURE__*/ _let(9, ($scope) => {
	_attr_input_value($scope, "b", $scope.j, $valueChange($scope));
	_text($scope.d, $scope.j);
});
const $setup__script = _script("a3", ($scope) => {
	_attr_input_value_script($scope, "b");
	_on($scope.c, "click", function() {
		$qty($scope, $scope.j + 1);
	});
});
function $valueChange($scope) {
	return (_new_qty) => {
		$qty($scope, _new_qty);
	};
}
_resume("a0", $valueChange);
