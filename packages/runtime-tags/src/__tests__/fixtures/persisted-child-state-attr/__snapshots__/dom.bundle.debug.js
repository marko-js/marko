// tags/counter/index.marko
const $template$1 = "<section><p>Value <!> (spun <!>)</p><button class=spin>spin</button></section>";
const $walks$1 = "Eb%c%l l";
const $spins = /*@__PURE__*/ _let("spins/6", ($scope) => _text($scope["#text/1"], $scope.spins));
const $setup__script$1 = _script("__tests__/tags/counter/index.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$spins($scope, $scope.spins + 1);
}));
function $setup$1($scope) {
	$spins($scope, 0);
	$setup__script$1($scope);
}
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input$1 = ($scope, input) => $input_value($scope, input.value);
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter/index.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main><h1> </h1>${_w0}<button class=inc>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `E l/${_w0}& l`)($walks$1);
const $count = /*@__PURE__*/ _let("count/6", ($scope) => $input_value($scope["#childScope/1"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
