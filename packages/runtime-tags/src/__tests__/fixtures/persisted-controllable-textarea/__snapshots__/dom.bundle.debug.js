// template.marko
const $template = "<main><h1> </h1><textarea></textarea></main>";
const $walks = "E l l";
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input_text = /*@__PURE__*/ _const("input_text", ($scope) => _attr_textarea_value($scope, "#textarea/1", $scope.input_text, $valueChange));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_textarea_value_script($scope, "#textarea/1"));
const $setup = $setup__script;
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_text($scope, input.text);
};
function $valueChange(next) {
	document.querySelector("main").dataset.text = next;
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
