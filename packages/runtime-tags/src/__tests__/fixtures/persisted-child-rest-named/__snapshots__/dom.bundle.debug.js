// tags/card/index.marko
const $template$1 = "<h2> </h2><p> </p>";
const $walks$1 = "D lD l";
const $setup$1 = () => {};
const $label = ($scope, label) => _text($scope["#text/0"], label);
const $rest = ($scope, rest) => _text($scope["#text/1"], JSON.stringify(rest));
const $input$1 = ($scope, input) => {
	(({ label, ...rest }) => $rest($scope, rest))(input);
	$label($scope, input.label);
};
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($walks$1);
const $count = /*@__PURE__*/ _let("count/5", ($scope) => $rest($scope["#childScope/0"], { value: $scope.count }));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => $label($scope["#childScope/0"], input_title);
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
