// tags/child.marko
const $template$2 = "<input>";
const $walks$2 = " b";
const $setup$2 = () => {};
const $input_value = /*@__PURE__*/ _const("input_value", ($scope) => _attr_input_value_default($scope, "#input/0", $scope.input_value));
const $input_class$1 = ($scope, input_class) => _attr_class($scope["#input/0"], input_class);
const $input$1 = ($scope, input) => {
	$input_class$1($scope, input.class);
	$input_value($scope, input.value);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$2, " b", $setup$2, $input$1);

// tags/wrap.marko
const $template$1 = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$2, $template$2);
const $walks$1 = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)(" b", " b");
function $setup$1($scope) {
	/* @__PURE__ */ $setup$2($scope["#childScope/0"]);
	$input_value($scope["#childScope/0"], "override");
	/* @__PURE__ */ $setup$2($scope["#childScope/1"]);
}
const $input_class = ($scope, input_class) => $input_class$1($scope["#childScope/0"], input_class);
const $input = /*@__PURE__*/ _const("input", ($scope) => {
	const $child_input_spread = {
		value: "default",
		...$scope.input
	};
	$input_class$1($scope["#childScope/1"], $child_input_spread.class);
	$input_value($scope["#childScope/1"], $child_input_spread.value);
	$input_class($scope, $scope.input.class);
});
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<div id=value-missing>${_w0}</div><div id=value-undefined>${_w1}</div><div id=dynamic-value-set><!></div>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `D/${_w0}&lD/${_w1}&lD%l`)($walks$1, $walks$1);
const Wrap = wrap_default;
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input($scope["#childScope/0"], { class: "foo" });
	$setup$1($scope["#childScope/1"]);
	$input($scope["#childScope/1"], { value: undefined });
	$dynamicTag($scope, Wrap, () => ({
		class: "bar",
		value: "abcd"
	}));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
