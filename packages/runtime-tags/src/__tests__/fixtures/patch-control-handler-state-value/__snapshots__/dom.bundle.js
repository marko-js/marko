// template.marko
const $if_content__l = /*@__PURE__*/ _if_closure_patch("a5", 2, 0, ($scope) => _attr_input_value($scope, "a", String($scope._.h), $valueChange));
const $if_content__setup__script = _script("a1", ($scope) => _attr_input_value_script($scope, "a"));
const $l = _let(7, ($scope) => {
	_text($scope.b, $scope.h);
	$if_content__l($scope);
});
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$l($scope, +$scope.h + 1);
}));
function $valueChange(v) {
	console.log(v);
}
_resumed.a0 = $valueChange;
