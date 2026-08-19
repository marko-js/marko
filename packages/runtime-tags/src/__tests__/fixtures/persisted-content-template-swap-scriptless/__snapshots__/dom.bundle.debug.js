// tags/body-a/index.marko
const $template$3 = "<em>A</em>";
const $walks$3 = "b";
const $setup$3 = () => {};
var body_a_default = /*@__PURE__*/ _template("__tests__/tags/body-a/index.marko", $template$3, "b");

// tags/body-b/index.marko
const $template$2 = "<strong>B</strong>";
const $walks$2 = "b";
const $setup$2 = () => {};
var body_b_default = /*@__PURE__*/ _template("__tests__/tags/body-b/index.marko", $template$2, "b");

// tags/card/index.marko
const $template$1 = "<section><h2> </h2><!></section>";
const $walks$1 = "E l%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $input_title$1 = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => {
	$input_title$1($scope, input.title);
	$input_content($scope, input.content);
};
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1);
const $setup = () => {};
const $input_title = ($scope, input_title) => $input_title$1($scope["#childScope/0"], input_title);
const $input_alt = ($scope, input_alt) => $input_content($scope["#childScope/0"], input_alt ? body_b_default : body_a_default);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_alt($scope, input.alt);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
