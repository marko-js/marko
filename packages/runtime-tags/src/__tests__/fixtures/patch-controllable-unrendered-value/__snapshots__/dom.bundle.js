// template.marko
const $if_content__setup__script = _script("a3", ($scope) => {
	_attr_input_value_script($scope, "a");
	_attr_input_checked_script($scope, "b");
});
const $n = /*@__PURE__*/ _fill_let("a7", 8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.i + 1);
}));
function $valueChange(next) {
	console.log(next);
}
function $checkedChange(next) {
	console.log(next);
}
_resumed.a0 = $valueChange;
_resumed.a1 = $checkedChange;
