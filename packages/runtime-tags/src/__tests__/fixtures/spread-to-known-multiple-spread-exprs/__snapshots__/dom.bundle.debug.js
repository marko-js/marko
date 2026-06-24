// tags/child.marko
const $template$2 = "<input>";
const $walks$2 = " b";
const $setup$2 = () => {};
const $input_value = /*@__PURE__*/ _const("input_value", ($scope) => _attr_input_value_default($scope, "#input/0", $scope.input_value));
const $input_class = ($scope, input_class) => _attr_class($scope["#input/0"], input_class);
const $input_a = ($scope, input_a) => _attr($scope["#input/0"], "data-a", input_a);
const $input$1 = ($scope, input) => {
	$input_class($scope, input.class);
	$input_value($scope, input.value);
	$input_a($scope, input.a);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$2, " b", $setup$2, $input$1);

// tags/wrap.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
function $setup$1($scope) {
	/* @__PURE__ */ $setup$2($scope["#childScope/0"]);
}
const $input = /*@__PURE__*/ _const("input", ($scope) => {
	const $child_input_spread = {
		...$scope.input,
		...{ a: 1 }
	};
	$input_class($scope["#childScope/0"], $child_input_spread.class);
	$input_value($scope["#childScope/0"], $child_input_spread.value);
	$input_a($scope["#childScope/0"], $child_input_spread.a);
});
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input($scope["#childScope/0"], { class: "foo" });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
