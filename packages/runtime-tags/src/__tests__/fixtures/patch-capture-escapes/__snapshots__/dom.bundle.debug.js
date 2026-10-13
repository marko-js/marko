// template.marko
const $template = "<main><h1> </h1><a> </a></main>";
const $walks = "E l D m";
const $setup = () => {};
const $input_name = ($scope, input_name) => {
	_text($scope["#text/0"], `a&b${input_name}<c`);
	_text($scope["#text/2"], input_name);
};
const $input_on = ($scope, input_on) => _attr($scope["#a/1"], "title", input_on ? "a\"b" : "c'd");
const $input_flag = ($scope, input_flag) => _attr($scope["#a/1"], "data-x", input_flag && "on");
const $input = ($scope, input) => {
	$input_name($scope, input.name);
	$input_on($scope, input.on);
	$input_flag($scope, input.flag);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
