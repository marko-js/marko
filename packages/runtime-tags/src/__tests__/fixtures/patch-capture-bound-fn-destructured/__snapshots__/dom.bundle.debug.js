// tags/child.marko
const $template$1 = "<button><!>: <!></button>";
const $walks$1 = " D%c%l";
const $shown = /*@__PURE__*/ _fill_let("__tests__/tags/child.marko0", "shown/7", ($scope) => _text($scope["#text/2"], $scope.shown));
const $setup__script = _script("__tests__/tags/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$shown($scope, $scope.fn());
}));
function $setup$1($scope) {
	$setup__script($scope);
	$shown($scope, "none");
}
const $label = ($scope, label) => _text($scope["#text/1"], label);
const $input$1 = ($scope, input) => {
	$fn$1($scope, input.fn);
	$label($scope, input.label);
};
const $fn$1 = /*@__PURE__*/ _const("fn");
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$fn$1($scope["#childScope/0"], $fn($scope));
}
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => $label($scope["#childScope/0"], $scope.input_label));
const $input = ($scope, input) => $input_label($scope, input.label);
const $fn = ($scope) => () => $scope.input_label;
_resumed["__tests__/template.marko_0/fn"] = $fn;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
