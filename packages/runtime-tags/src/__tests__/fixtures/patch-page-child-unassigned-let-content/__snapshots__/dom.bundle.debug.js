// tags/card.marko
const $template$1 = "<section><!><p> </p></section>";
const $walks$1 = "D%bD m";
const $setup$1 = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $c = /*@__PURE__*/ _let("c/6", ($scope) => $dynamicTag($scope, $scope.c));
const $input_content = $c;
const $input_label$1 = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input$1 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_label$1($scope, input.label);
};
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<em>static</em>");
function $setup($scope) {
	$input_content($scope["#childScope/0"], $card_content($scope));
}
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
