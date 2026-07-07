// template.marko
const $template = "<button>swap</button><select><option value=a>a</option><option>dyn</option></select>";
const $walks = " b Db l";
const $n = /*@__PURE__*/ _let("n/6", ($scope) => _attr($scope["#option/2"], "value", $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, "a");
}));
function $setup($scope) {
	$n($scope, "b");
	$setup__script($scope);
}
const $input_rest__script = _script("__tests__/template.marko_0_input_rest", ($scope) => _attrs_script($scope, "#select/1"));
const $input_rest = /*@__PURE__*/ _const("input_rest", ($scope) => {
	_attrs($scope, "#select/1", $scope.input_rest);
	$input_rest__script($scope);
});
const $input = ($scope, input) => $input_rest($scope, input.rest);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
