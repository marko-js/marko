// template.marko
const $template = "<button>respread</button><input><div> </div>";
const $walks = " b bD l";
_enable_controllable_input();
const $v = /*@__PURE__*/ _let("v/3", ($scope) => {
	_attr_input_value($scope, "#input/1", $scope.v, $valueChange($scope));
	_text($scope["#text/2"], $scope.v);
});
const $rest__script = _script("__tests__/template.marko_0_rest", ($scope) => _attrs_script($scope, "#input/1"));
const $rest = /*@__PURE__*/ _let("rest/4", ($scope) => {
	_attrs_partial($scope, "#input/1", $scope.rest, {
		value: 1,
		valueChange: 1
	});
	$rest__script($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$rest($scope, { placeholder: "q" });
	});
	_attr_input_value_script($scope, "#input/1");
});
function $setup($scope) {
	$v($scope, "a");
	$rest($scope, { placeholder: "p" });
	$setup__script($scope);
}
function $valueChange($scope) {
	return (_new_v) => {
		$v($scope, _new_v);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
