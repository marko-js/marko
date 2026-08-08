// tags/field/index.marko
const $template = "<input>";
const $v = /*@__PURE__*/ _let(1, ($scope) => _attr_input_value($scope, "a", $scope.b, $valueChange($scope)));
const $setup__script$1 = _script("c1", ($scope) => _attr_input_value_script($scope, "a"));
function $setup($scope) {
	$v($scope, "");
	$setup__script$1($scope);
}
function $valueChange($scope) {
	return (_new_v) => {
		$v($scope, _new_v);
	};
}
_resume("c0", $valueChange);

// template.marko
const $if_content__setup = ($scope) => {
	$setup($scope.a);
};
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
