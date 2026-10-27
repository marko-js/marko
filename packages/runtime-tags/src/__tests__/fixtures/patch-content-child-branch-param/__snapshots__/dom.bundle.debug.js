// tags/card/index.marko
const $template$1 = "<section></section>";
const $walks$1 = " b";
const $setup$1 = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content__OR__input_item = /*@__PURE__*/ _fill_join_if("__tests__/tags/card/index.marko_fill1 __tests__/tags/card/index.marko_fill1/unpatched", "input_item", /*@__PURE__*/ _fill_join_if("__tests__/tags/card/index.marko_fill0 __tests__/tags/card/index.marko_fill0/unpatched", "input_content", /*@__PURE__*/ _or_resume("__tests__/tags/card/index.marko_1_input_content#0:4_input_item#0:5/init", 1, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content, ($_) => ({ item: $scope._.input_item }))), "#section/0", 0), "#section/0", 0);
const $if_content__input_content = /*@__PURE__*/ _if_closure("#section/0", 0, $if_content__input_content__OR__input_item);
const $if_content__setup = ($scope) => {
	$if_content__input_content._($scope);
	$if_content__input_item._($scope);
};
const $if_content__input_item = /*@__PURE__*/ _if_closure("#section/0", 0, $if_content__input_content__OR__input_item);
const $if = /*@__PURE__*/ _if("#section/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_content($scope, input.content);
	$input_item$1($scope, input.item);
};
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
const $input_item$1 = /*@__PURE__*/ _const("input_item", $if_content__input_item);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, " b", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)(" b");
const $card_content__item_name = ($scope, item_name) => _text($scope["#text/0"], item_name.toUpperCase());
const $card_content__$params = ($scope, $params2) => $card_content__item_name($scope, $params2[0].item?.name);
const $card_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", 0, $card_content__$params);
function $setup($scope) {
	$input_content($scope["#childScope/0"], $card_content($scope));
}
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
const $input_item = ($scope, input_item) => $input_item$1($scope["#childScope/0"], input_item);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_item($scope, input.item);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
