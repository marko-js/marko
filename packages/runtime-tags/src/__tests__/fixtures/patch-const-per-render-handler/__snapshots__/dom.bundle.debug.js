// template.marko
const $template = "<label> </label><input><button>show</button><output> </output>";
const $walks = " D l b bD l";
let n = 0;
const $input_name__OR__uid = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_name", /*@__PURE__*/ _or(11, ($scope) => {
	_attr($scope["#label/0"], "for", `${$scope.uid}-${$scope.input_name}`);
	_attr($scope["#input/2"], "id", `${$scope.uid}-${$scope.input_name}`);
}));
const $uid = _fill_resume("__tests__/template.marko_fill1", /*@__PURE__*/ _const("uid", $input_name__OR__uid));
const $shown = /*@__PURE__*/ _let("shown/12", ($scope) => _text($scope["#text/4"], $scope.shown));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$shown($scope, $scope.uid);
}));
function $setup($scope) {
	$shown($scope, "");
	$setup__script($scope);
	$uid($scope, "u" + ++n);
}
const $input_name = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_name", ($scope) => {
	$input_name__OR__uid($scope);
	_attr($scope["#input/2"], "name", $scope.input_name);
}, $input_name__OR__uid);
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input_value = /*@__PURE__*/ _const("input_value", ($scope) => _attr_input_value_default($scope, "#input/2", $scope.input_value));
const $input = ($scope, input) => {
	$input_name($scope, input.name);
	$input_label($scope, input.label);
	$input_value($scope, input.value);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
