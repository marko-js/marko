// tags/card/index.marko
const $template$1 = "<section><header><!></header><footer><!></footer></section>";
const $walks$1 = "E%lD%m";
const $setup$1 = () => {};
const $input_header_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $input_footer_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_header = $dynamicTag;
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_footer = $dynamicTag2;
const $input$1 = ($scope, input) => {
	$input_header($scope, input.header);
	$input_footer($scope, input.footer);
};
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1);
const $footer_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "static");
const $header_content__input_h = /*@__PURE__*/ _closure_get("input_h", ($scope) => _text($scope["#text/0"], $scope._.input_h));
const $header_content__setup = $header_content__input_h;
const $header_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<b> </b>", "D ", $header_content__setup);
function $setup($scope) {
	$input_header($scope["#childScope/0"], attrTag({ content: $header_content($scope) }));
	$input_footer($scope["#childScope/0"], attrTag({ content: $footer_content($scope) }));
}
const $input = ($scope, input) => $input_h($scope, input.h);
const $input_h__closure = /*@__PURE__*/ _closure($header_content__input_h);
const $input_h = /*@__PURE__*/ _const("input_h", $input_h__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
