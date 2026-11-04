// tags/echo.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_text = ($scope, input_text) => _text($scope["#text/0"], input_text);
const $input$1 = ($scope, input) => $input_text($scope, input.text);
var echo_default = /*@__PURE__*/ _template("__tests__/tags/echo.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<span> </span>${_w0}${_w1}`)($template$1, $template$2);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `D l/${_w0}&/${_w1}&`)("D l", $walks$2);
const $Foo = ($scope, Foo) => $Foo_label($scope, Foo?.label);
const $Foo_label = ($scope, Foo_label) => {
	_text($scope["#text/0"], Foo_label);
	$input_text($scope["#childScope/1"], Foo_label);
};
const $input_label = ($scope, input_label) => $Foo($scope, { label: input_label });
function $setup($scope) {
	$setup$2($scope["#childScope/2"]);
}
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/counter.marko
const $template = "<button class=inc> </button>";
const $walks = " D l";
const $n = /*@__PURE__*/ _fill_let("__tests__/tags/counter.marko_fill0", "n/2", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$n($scope, 0);
}
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template, $walks, $setup);
