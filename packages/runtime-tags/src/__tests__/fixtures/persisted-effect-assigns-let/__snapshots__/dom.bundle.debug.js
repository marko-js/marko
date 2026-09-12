// tags/probe.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $seen = /*@__PURE__*/ _fill_let("__tests__/tags/probe.marko0", "seen/4", ($scope) => _text($scope["#text/0"], $scope.seen));
function $setup$1($scope) {
	$seen($scope, "");
}
const $input_label__script = _script("__tests__/tags/probe.marko_0_input_label#3", ($scope) => $seen($scope, `${$scope.input_label}!`));
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_label__script);
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var probe_default = /*@__PURE__*/ _template("__tests__/tags/probe.marko", $template$1, "D l", $setup$1, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
