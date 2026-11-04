// tags/item.marko
const $template$3 = "<em> </em>";
const $walks$3 = "D l";
const $setup$3 = ($_) => {};
const $input_label$1 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$3 = ($scope, input) => $input_label$1($scope, input.label);
var item_default = /*@__PURE__*/ _template("__tests__/tags/item.marko", $template$3, "D l", 0, $input$3);

// tags/frame-label.marko
const $template$2 = "<pre> </pre>";
const $walks$2 = "D l";
const $setup$2 = ($_) => {};
const $input_data_label = ($scope, input_data_label) => _text($scope["#text/0"], input_data_label);
const $input$2 = ($scope, input) => $input_data($scope, input.data);
const $input_data = ($scope, input_data) => $input_data_label($scope, input_data?.label);
var frame_label_default = /*@__PURE__*/ _template("__tests__/tags/frame-label.marko", $template$2, "D l", 0, $input$2);

// tags/frame.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<section><!></section>${_w0}`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `D%l/${_w0}&`)("D l");
const $setup$1 = ($_) => {};
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input$1 = ($scope, input) => {
	$input_data($scope["#childScope/1"], input);
	$dynamicTag$1($scope, input.item, ($_) => ({ label: "item" }));
};
var frame_default = /*@__PURE__*/ _template("__tests__/tags/frame.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_framed__OR__input_label = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_input_framed#3_input_label#4/setup", 5, ($scope) => $dynamicTag($scope, $scope.input_framed ? frame_default : null, ($_) => ({
	item: item_default,
	label: $scope.input_label
})));
const $input_framed = /*@__PURE__*/ _const("input_framed", $input_framed__OR__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_framed__OR__input_label);
const $input = ($scope, input) => {
	$input_framed($scope, input.framed);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
