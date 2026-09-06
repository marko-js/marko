// tags/card/index.marko
const $template$1 = "<b> </b><!><!>";
const $walks$1 = "D l%c";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => {
	$input_title($scope, input.title);
	$input_content($scope, input.content);
};
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $setup = () => {};
const $card_content__item_n = /*@__PURE__*/ _closure_get("item_n", ($scope) => _text($scope["#text/0"], $scope._.item_n));
const $card_content__setup = $card_content__item_n;
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<em> </em>", "D ", $card_content__setup);
const $for_content__setup = ($scope) => $input_content_direct($scope["#childScope/0"], $card_content($scope));
const $for_content__item_t = ($scope, item_t) => $input_title($scope["#childScope/0"], item_t);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_t($scope, $params2[0]?.t);
	$for_content__item_n($scope, $params2[0]?.n);
};
const $for_content__item_n__closure = /*@__PURE__*/ _closure($card_content__item_n);
const $for_content__item_n = /*@__PURE__*/ _const("item_n", $for_content__item_n__closure);
const $for = /*@__PURE__*/ _for_of("#ul/0", /*@__PURE__*/ ((_w0) => `<li>${_w0}</li>`)($template$1), /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1), $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
