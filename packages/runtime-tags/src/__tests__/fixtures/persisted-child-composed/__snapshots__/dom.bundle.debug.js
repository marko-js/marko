// tags/relay/tags/leaf/index.marko
const $template$2 = "<b> </b><i> </i>";
const $walks$2 = "D lD l";
const $setup$2 = () => {};
const $input_text = ($scope, input_text) => _text($scope["#text/0"], input_text);
const $input_note = ($scope, input_note) => _text($scope["#text/1"], input_note);
const $input$2 = ($scope, input) => {
	$input_text($scope, input.text);
	$input_note($scope, input.note);
};
var leaf_default = /*@__PURE__*/ _template("__tests__/tags/relay/tags/leaf/index.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/relay/index.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<section>${_w0}</section>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$2);
const $setup$1 = () => {};
const $input_label = ($scope, input_label) => $input_text($scope["#childScope/0"], input_label);
const $input_qty = ($scope, input_qty) => $input_note($scope["#childScope/0"], input_qty);
const $input$1 = ($scope, input) => {
	$input_label($scope, input.label);
	$input_qty($scope, input.qty);
};
var relay_default = /*@__PURE__*/ _template("__tests__/tags/relay/index.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($walks$1);
const $count = /*@__PURE__*/ _let("count/5", ($scope) => $input_qty($scope["#childScope/0"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => $input_label($scope["#childScope/0"], input_title);
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
