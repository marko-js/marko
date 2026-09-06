// template.marko
const $template = "<main><h1> </h1><details><summary>More</summary><p>Body</p></details></main>";
const $walks = "E l l";
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input_show = /*@__PURE__*/ _const("input_show", ($scope) => _attr_details_open($scope, "#details/1", $scope.input_show, $openChange));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_details_open_script($scope, "#details/1"));
const $setup = $setup__script;
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_show($scope, input.show);
};
function $openChange(next) {
	document.querySelector("main").dataset.open = String(next);
}
_resume("__tests__/template.marko_0/openChange", $openChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
