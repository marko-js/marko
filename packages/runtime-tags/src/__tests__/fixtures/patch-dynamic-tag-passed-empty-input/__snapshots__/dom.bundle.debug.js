// tags/plain.marko
const $template$2 = "<i> </i>";
const $walks$2 = "D l";
const $setup$2 = ($_) => {};
const $input_n$2 = ($scope, input_n) => _text($scope["#text/0"], input_n);
const $input$2 = ($scope, input) => $input_n$2($scope, input.n);
var plain_default = /*@__PURE__*/ _template("__tests__/tags/plain.marko", $template$2, "D l", 0, $input$2);

// tags/card.marko
const $template$1 = "<p> </p><!><!>";
const $walks$1 = "D l%c";
const $setup$1 = ($_) => {};
const $input_tag_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $input_n$1 = ($scope, input_n) => _text($scope["#text/0"], input_n);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_tag = $dynamicTag;
const $input$1 = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_n$1($scope, input.n);
};
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
function $setup($scope) {
	$input_tag($scope["#childScope/0"], plain_default);
}
const $input_n = ($scope, input_n) => $input_n$1($scope["#childScope/0"], input_n);
const $input = ($scope, input) => $input_n($scope, input.n);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
