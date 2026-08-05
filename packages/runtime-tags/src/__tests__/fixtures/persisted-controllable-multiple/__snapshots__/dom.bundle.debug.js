// template.marko
const $template = "<main><h1> </h1><select><option value=a>A</option><option value=b>B</option></select></main>";
const $walks = "E l l";
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input_choice = /*@__PURE__*/ _const("input_choice", ($scope) => _attr_select_value($scope, "#select/1", $scope.input_choice, $valueChange));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_select_value_script($scope, "#select/1"));
const $setup = $setup__script;
const $input_many = ($scope, input_many) => _attr($scope["#select/1"], "multiple", input_many);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_many($scope, input.many);
	$input_choice($scope, input.choice);
};
function $valueChange(next) {
	document.querySelector("main").dataset.choice = String(next);
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
