// tags/plain.marko
const $template$2 = "<div class=plain><!></div>";
const $walks$2 = "D%l";
const $setup$2 = () => {};
const $input_item_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_item_content = $dynamicTag$1;
const $input$1 = ($scope, input) => $input_item($scope, input.item);
const $input_item = ($scope, input_item) => $input_item_content($scope, input_item?.content);
var plain_default = /*@__PURE__*/ _template("__tests__/tags/plain.marko", $template$2, "D%l", 0, $input$1);

// tags/heading.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $input_type_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $item_content__input_text = /*@__PURE__*/ _closure_get("input_text", ($scope) => _text($scope["#text/0"], $scope._.input_text), 0, "__tests__/tags/heading.marko_1_input_text#4/subscribe");
const $item_content__setup = $item_content__input_text;
const $item_content = _content("__tests__/tags/heading.marko_1*content", "text <!>", "b%", $item_content__setup);
const $item_content2 = _content_resume($item_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_type = ($scope, input_type) => $dynamicTag($scope, input_type, () => ({ item: attrTag({ content: $item_content($scope) }) }));
const $input = ($scope, input) => {
	$input_type($scope, input.type);
	$input_text($scope, input.text);
};
const $input_text__closure = /*@__PURE__*/ _closure($item_content__input_text);
const $input_text = /*@__PURE__*/ _const("input_text", $input_text__closure);
var heading_default = /*@__PURE__*/ _template("__tests__/tags/heading.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
function $setup($scope) {
	$input_type($scope["#childScope/0"], plain_default);
	$input_text($scope["#childScope/0"], "Hello");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
