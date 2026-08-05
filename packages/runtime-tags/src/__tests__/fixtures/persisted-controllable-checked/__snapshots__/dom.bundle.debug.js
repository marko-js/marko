// template.marko
const $template = "<main><h1> </h1><input type=checkbox></main>";
const $walks = "E l l";
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input_agree = /*@__PURE__*/ _const("input_agree", ($scope) => _attr_input_checked($scope, "#input/1", $scope.input_agree, $checkedChange));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_input_checked_script($scope, "#input/1"));
const $setup = $setup__script;
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_agree($scope, input.agree);
};
function $checkedChange(next) {
	document.querySelector("main").dataset.agree = String(next);
}
_resume("__tests__/template.marko_0/checkedChange", $checkedChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
