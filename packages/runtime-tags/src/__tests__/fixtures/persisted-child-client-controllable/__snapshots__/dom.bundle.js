// tags/field/index.marko
const $template = "<input><em> </em>";
const $walks = " bD l";
const $v = /*@__PURE__*/ _let(2, ($scope) => {
	_attr_input_value($scope, "a", $scope.c, $valueChange($scope));
	_text($scope.b, $scope.c);
});
const $setup__script$1 = _script("b1", ($scope) => _attr_input_value_script($scope, "a"));
function $setup($scope) {
	$v($scope, "");
	$setup__script$1($scope);
}
const $valueChange = ($scope) => (_new_v) => {
	$v($scope, _new_v);
};
_resume("b0", $valueChange);

// template.marko
const $if_content__setup = ($scope) => {
	$setup($scope.a);
};
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
