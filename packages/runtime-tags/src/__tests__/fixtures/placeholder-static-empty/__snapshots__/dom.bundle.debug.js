// template.marko
const $template = "<div><!><b></b><i></i></div><div><b></b><i> </i><u></u></div>";
const $walks = "D%lDbD m";
const $setup = () => {};
const $input_x = ($scope, input_x) => {
	_text($scope["#text/0"], input_x);
	_text($scope["#text/1"], input_x);
};
const $input = ($scope, input) => $input_x($scope, input.x);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
