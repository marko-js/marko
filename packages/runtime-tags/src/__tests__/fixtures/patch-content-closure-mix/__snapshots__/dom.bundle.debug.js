// tags/card/index.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const $card_content__input_prefix = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_prefix", /*@__PURE__*/ _shell_subscribe_closure_get("__tests__/template.marko_2_input_prefix#0:4/init", "input_prefix/5", ($scope) => _text($scope["#text/1"], $scope._._.input_prefix), ($scope) => $scope._._, "__tests__/template.marko_2_input_prefix#0:4/subscribe"), 0);
const $card_content__$global_brand = /*@__PURE__*/ _fill_global_join("brand", "__tests__/template.marko_2_$global_brand#4/global", ($scope) => {
	_text($scope["#text/0"], $scope.$global.brand);
});
const $card_content__setup = ($scope) => {
	$card_content__input_prefix($scope);
	$card_content__item($scope);
	$card_content__$global_brand($scope);
};
const $card_content__item = /*@__PURE__*/ _shell_subscribe_closure_get("__tests__/template.marko_2_item#1:2/init", "item/6", ($scope) => _text($scope["#text/2"], $scope._.item), 0, "__tests__/template.marko_2_item#1:2/subscribe");
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<i><!>:<!>:<!></i>", "D%c%c%", $card_content__setup);
const $for_content__setup = ($scope) => $input_content_direct($scope["#childScope/0"], $card_content($scope));
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for_content__item__closure = /*@__PURE__*/ _closure($card_content__item);
const $for_content__item = /*@__PURE__*/ _const("item", $for_content__item__closure);
const $for = /*@__PURE__*/ _for_of_unkeyed("#main/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_prefix($scope, input.prefix);
};
const $input_prefix__closure = /*@__PURE__*/ _closure($card_content__input_prefix);
const $input_prefix = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_prefix", $input_prefix__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
