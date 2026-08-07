// tags/echo/index.marko
const $template$1 = "<em><!><!></em>";
const $walks$1 = "D%b%l";
const $setup$1 = () => {};
const $skip = ($scope, skip) => _text($scope["#text/0"], skip);
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => {
	$skip($scope, input.skip);
	$input_label($scope, input.label);
};
var echo_default = /*@__PURE__*/ _template("__tests__/tags/echo/index.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($walks$1);
const $label = /*@__PURE__*/ _let("label/2", ($scope) => $input_label($scope["#childScope/0"], $scope.label));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$label($scope, $scope.label + "!");
}));
function $setup($scope) {
	$skip($scope["#childScope/0"], "k");
	$label($scope, "a");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
