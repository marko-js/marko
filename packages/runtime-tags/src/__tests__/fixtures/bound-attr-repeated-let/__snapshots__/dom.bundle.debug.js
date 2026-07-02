// template.marko
const $template = "<button> </button><input><input><input>";
const $walks = " D l b b b";
const $x__OR__$valueChange = /* @__PURE__ */ _or(7, ($scope) => {
	_attr_input_value($scope, "#input/2", $scope.x, $scope.$valueChange);
	_attr_input_value($scope, "#input/3", $scope.x, $scope.$valueChange);
	_attr_input_value($scope, "#input/4", $scope.x, $scope.$valueChange);
});
const $x = /* @__PURE__ */ _let("x/5", ($scope) => {
	_text($scope["#text/1"], $scope.x);
	$x__OR__$valueChange($scope);
});
const $valueChange3 = /* @__PURE__ */ _const("$valueChange", $x__OR__$valueChange);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$x($scope, $scope.x + "!");
	});
	_attr_input_value_script($scope, "#input/2");
	_attr_input_value_script($scope, "#input/3");
	_attr_input_value_script($scope, "#input/4");
});
function $setup($scope) {
	$x($scope, "start");
	$valueChange3($scope, $valueChange2($scope));
	$setup__script($scope);
}
function $valueChange2($scope) {
	return (_new_x) => {
		$x($scope, _new_x);
	};
}
_resume("__tests__/template.marko_0/valueChange2", $valueChange2);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
