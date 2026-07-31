// tags/echo/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_label = ($scope, rest_label) => _text($scope, "#text/0", rest_label);
const $input2 = ($scope, input) => $input_label($scope, input?.label);
const $input = $input2;
var echo_default = /*@__PURE__*/ _template("__tests__/tags/echo/index.marko", $template$1, "D l", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("D l");
const $label = /*@__PURE__*/ _let("label/2", ($scope) => $input($scope["#childScope/0"], { label: $scope.label }));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$label($scope, $scope.label + "!");
}));
function $setup($scope) {
	$label($scope, "a");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
