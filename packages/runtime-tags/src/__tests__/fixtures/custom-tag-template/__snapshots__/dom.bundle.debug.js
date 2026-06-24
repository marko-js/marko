// hello.marko
const $template$1 = "Hello <!>!";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $input_name = ($scope, input_name) => _text($scope["#text/0"], input_name);
const $input = ($scope, input) => $input_name($scope, input.name);
var hello_default = /*@__PURE__*/ _template("__tests__/hello.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("b%c");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_name($scope["#childScope/0"], "Frank");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
