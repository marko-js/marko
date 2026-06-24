// tags/child.marko
const $template$3 = "<input>";
const $walks$3 = " b";
const $setup$3 = () => {};
const $input_value = /*@__PURE__*/ _const("input_value", ($scope) => _attr_input_value_default($scope, "#input/0", $scope.input_value));
const $input_class = ($scope, input_class) => _attr_class($scope["#input/0"], input_class);
const $input$2 = ($scope, input) => {
	$input_class($scope, input.class);
	$input_value($scope, input.value);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$3, " b", $setup$3, $input$2);

// tags/wrap.marko
const $template$2 = $template$3;
const $walks$2 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
function $setup$2($scope) {
	/* @__PURE__ */ $setup$3($scope["#childScope/0"]);
}
const $value = ($scope, value) => $input_value($scope["#childScope/0"], value);
const $rest_class$1 = ($scope, rest_class) => $input_class($scope["#childScope/0"], rest_class);
const $input$1 = ($scope, input) => {
	(({ value, ...rest }) => $rest$1($scope, rest))(input);
	$value($scope, input.value);
};
const $rest$1 = ($scope, rest) => $rest_class$1($scope, rest.class);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$2, $walks$2, $setup$2, $input$1);

// tags/wrap-outer.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2);
function $setup$1($scope) {
	$setup$2($scope["#childScope/0"]);
	$value($scope["#childScope/0"], "abcd");
}
const $rest_class = ($scope, rest_class) => $rest_class$1($scope["#childScope/0"], rest_class);
const $input = ($scope, input) => (({ value, ...rest }) => $rest($scope, rest))(input);
const $rest = ($scope, rest) => $rest_class($scope, rest.class);
var wrap_outer_default = /*@__PURE__*/ _template("__tests__/tags/wrap-outer.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$rest_class($scope["#childScope/0"], "foo");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
