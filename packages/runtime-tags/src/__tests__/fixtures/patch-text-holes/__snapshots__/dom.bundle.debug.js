// template.marko
const $template = "<div class=card><h1> </h1><p> </p></div>";
const $walks = "E lD m";
const $setup = () => {};
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input_body = ($scope, input_body) => _text($scope["#text/1"], input_body);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_body($scope, input.body);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
