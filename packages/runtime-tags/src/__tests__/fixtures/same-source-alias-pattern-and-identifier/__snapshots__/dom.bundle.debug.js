// template.marko
const $template = "<button><!> <!></button>";
const $walks = "D%c%l";
const $setup = () => {};
const $b = ($scope, b) => {
	_text($scope["#text/0"], b);
	$input_a_b($scope, b);
};
const $input_a_b = ($scope, b) => _text($scope["#text/1"], b);
const $input = ($scope, input) => $a2($scope, input.a);
const $a2 = ($scope, $a) => $b($scope, $a.b);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
