// template.marko
const $template = "<div>v=<!>|wrong=<!></div><input>";
const $walks = "Db%c%l b";
const $state3 = /* @__PURE__ */ _const("state", ($scope) => _attr_input_value($scope, "#input/2", $scope.state["v"], $scope.state["v" + "Change"]));
const $v = /* @__PURE__ */ _let("v/3", ($scope) => {
	_text($scope["#text/0"], $scope.v);
	$state3($scope, {
		v: $scope.v,
		vChange: $state($scope),
		keyChange: $state2($scope)
	});
});
const $wrong = /* @__PURE__ */ _let("wrong/4", ($scope) => _text($scope["#text/1"], $scope.wrong));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_input_value_script($scope, "#input/2"));
function $setup($scope) {
	$v($scope, "v1");
	$wrong($scope, "");
	$setup__script($scope);
}
function $state2($scope) {
	return function(x) {
		$wrong($scope, x);
	};
}
function $state($scope) {
	return function(x) {
		$v($scope, x);
	};
}
_resume("__tests__/template.marko_0/state2", $state2);
_resume("__tests__/template.marko_0/state", $state);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
