// template.marko
const $template = "<div id=a></div><div id=b></div><div id=c></div>";
const $walks = " b b b";
const $setup = () => {};
const $input_a = ($scope, input_a) => _attr($scope["#div/0"], "title", input_a);
const $input_b = ($scope, input_b) => _attr($scope["#div/1"], "title", input_b);
const $input_c = ($scope, input_c) => _attr($scope["#div/2"], "title", input_c);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
	$input_c($scope, input.c);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
