// template.marko
const $template = "<button><input><input></button>";
const $walks = " D b l";
const $count__OR__$valueChange = /* @__PURE__ */ _or(5, ($scope) => {
	_attr_input_value($scope, "#input/1", $scope.count, $scope.$valueChange);
	_attr_input_value($scope, "#input/2", $scope.count, $scope.$valueChange);
});
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */ _let("count/3", ($scope) => {
	$count__OR__$valueChange($scope);
	$count__script($scope);
});
const $valueChange3 = /* @__PURE__ */ _const("$valueChange", $count__OR__$valueChange);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_input_value_script($scope, "#input/1");
	_attr_input_value_script($scope, "#input/2");
});
function $setup($scope) {
	$count($scope, 0);
	$valueChange3($scope, $valueChange2($scope));
	$setup__script($scope);
}
function $valueChange2($scope) {
	return (_new_count) => {
		$count($scope, _new_count);
	};
}
_resume("__tests__/template.marko_0/valueChange2", $valueChange2);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
