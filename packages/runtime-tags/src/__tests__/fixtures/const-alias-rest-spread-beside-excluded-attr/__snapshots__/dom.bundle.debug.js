// tags/child.marko
const $template$1 = "<span><!>|<!></span>";
const $walks$1 = "D%c%l";
const $setup$1 = () => {};
const $input_a = ($scope, input_a) => _text($scope["#text/0"], input_a);
const $input_b = ($scope, input_b) => _text($scope["#text/1"], input_b);
const $input$1 = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
function $setup($scope) {
	$input_b($scope["#childScope/0"], "z");
}
const $rest_a = ($scope, rest_a) => $input_a($scope["#childScope/0"], rest_a);
const $input = ($scope, input) => $rest($scope, (({ skip, ...rest }) => rest)(input));
const $rest = ($scope, rest) => $rest_a($scope, rest.a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
