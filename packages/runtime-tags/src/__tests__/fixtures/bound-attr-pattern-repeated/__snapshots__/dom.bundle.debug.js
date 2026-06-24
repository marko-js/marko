// template.marko
const $Wrap_content__walks = " b b b", $Wrap_content__template = "<input><input><input>";
const $template = /*@__PURE__*/ ((_w0) => `<button>inc <!></button>${_w0}<!>`)($Wrap_content__template);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&b`)($Wrap_content__walks);
const $Wrap_content__a__OR__$valueChange = /*@__PURE__*/ _or(7, ($scope) => {
	_attr_input_value($scope, "#input/0", $scope.a, $scope.$aChange);
	_attr_input_value($scope, "#input/1", $scope.a, $scope.$aChange);
	_attr_input_value($scope, "#input/2", $scope.a, $scope.$aChange);
});
const $Wrap_content__a = /*@__PURE__*/ _const("a", $Wrap_content__a__OR__$valueChange);
const $Wrap_content__$aChange = /*@__PURE__*/ _const("$aChange", $Wrap_content__a__OR__$valueChange);
const $Wrap_content__setup__script = _script("__tests__/template.marko_1", ($scope) => {
	_attr_input_value_script($scope, "#input/0");
	_attr_input_value_script($scope, "#input/1");
	_attr_input_value_script($scope, "#input/2");
});
const $Wrap_content__setup = /*@__PURE__*/ _child_setup($Wrap_content__setup__script);
const $Wrap_content__tag_param_ = ($scope, $temp) => {
	$Wrap_content__$aChange($scope, $temp.aChange);
	$Wrap_content__a($scope, $temp.a);
};
const $Wrap_content__$params = ($scope, $params2) => $Wrap_content__tag_param_($scope, $params2?.[0]);
const $n__script = _script("__tests__/template.marko_0_n", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
const $n = /*@__PURE__*/ _let("n/3", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$Wrap_content__tag_param_($scope["#childScope/2"], { a: "z" + $scope.n });
	$n__script($scope);
});
function $setup($scope) {
	$Wrap_content__setup._($scope["#childScope/2"], $scope);
	$n($scope, 1);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
