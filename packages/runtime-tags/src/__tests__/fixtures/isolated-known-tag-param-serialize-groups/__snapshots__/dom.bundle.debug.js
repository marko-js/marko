// tags/child.marko
const $template$1 = "<div> </div><div> </div>";
const $walks$1 = "D lD l";
const $setup$1 = () => {};
const $input_a$1 = ($scope, input_a) => _text($scope["#text/0"], input_a);
const $input_b$1 = ($scope, input_b) => _text($scope["#text/1"], input_b);
const $input$1 = ($scope, input) => {
	$input_a$1($scope, input.a);
	$input_b$1($scope, input.b);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $Child_content__walks = "D lD l", $Child_content__template = "<div> </div><div> </div>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<!>`)($template$1, $Child_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&b`)($walks$1, $Child_content__walks);
const $Child_content__input_a = ($scope, input_a) => _text($scope["#text/0"], input_a);
const $Child_content__input_b = ($scope, input_b) => _text($scope["#text/1"], input_b);
const $Child_content__$params = ($scope, $params2) => $Child_content__input($scope, $params2[0]);
const $Child_content__input = ($scope, input) => {
	$Child_content__input_a($scope, input.a);
	$Child_content__input_b($scope, input.b);
};
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
}
const $input_a = ($scope, input_a) => {
	$input_a$1($scope["#childScope/0"], input_a);
	$Child_content__input_a($scope["#childScope/1"], input_a);
};
const $input_b = ($scope, input_b) => {
	$input_b$1($scope["#childScope/0"], input_b);
	$Child_content__input_b($scope["#childScope/1"], input_b);
};
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
