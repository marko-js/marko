// template.marko
const $template = "<!> <!>";
const $walks = "%c%b";
const $setup = () => {};
const $a = /*@__PURE__*/ _render(($scope, a) => _text($scope["#text/0"], a));
const $b = /*@__PURE__*/ _render(($scope, b) => _text($scope["#text/1"], b));
const $input = ($scope, input) => {
	$a($scope, input.a);
	$b($scope, input.b);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
