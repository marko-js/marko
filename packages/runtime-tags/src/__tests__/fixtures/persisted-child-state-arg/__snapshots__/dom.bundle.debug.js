// tags/arg-badge/index.marko
const $template$1 = "<p>Value <!></p>";
const $walks$1 = "Db%l";
const $setup$1 = () => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input$1 = ($scope, input) => $input_value($scope, input.value);
var arg_badge_default = /*@__PURE__*/ _template("__tests__/tags/arg-badge/index.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main><h1> </h1>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `E l/${_w0}& l`)($walks$1);
const $count = /*@__PURE__*/ _let("count/6", ($scope) => $input$1($scope["#childScope/1"], { value: $scope.count }));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
