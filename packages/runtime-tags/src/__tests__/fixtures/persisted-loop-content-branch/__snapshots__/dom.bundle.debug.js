// tags/card/index.marko
const $template$1 = "<li><b> </b><!></li>";
const $walks$1 = "E l%l";
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
const $else_content__item_n = /*@__PURE__*/ _closure_get("item_n", ($scope) => _text($scope["#text/0"], $scope._._.item_n), ($scope) => $scope._._);
const $else_content__setup = $else_content__item_n;
const $if_content__item_n = /*@__PURE__*/ _closure_get("item_n", ($scope) => _text($scope["#text/0"], $scope._._.item_n), ($scope) => $scope._._);
const $if_content__setup = $if_content__item_n;
const $card_content__if = /*@__PURE__*/ _if("#text/0", "<em> </em>", "D ", $if_content__setup, "<span> </span>", "D ", $else_content__setup);
const $card_content__item_alt = /*@__PURE__*/ _closure_get("item_alt", ($scope) => $card_content__if($scope, $scope._.item_alt ? 0 : 1));
const $card_content__setup = $card_content__item_alt;
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<!><!><!>", "b%", $card_content__setup);
const $for_content__setup = ($scope) => $input_content_direct($scope["#childScope/0"], $card_content($scope));
const $for_content__item_t = ($scope, item_t) => $input_title($scope["#childScope/0"], item_t);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_t($scope, $params2[0]?.t);
	$for_content__item_alt($scope, $params2[0]?.alt);
	$for_content__item_n($scope, $params2[0]?.n);
};
const $for_content__item_alt__closure = /*@__PURE__*/ _closure($card_content__item_alt);
const $for_content__item_alt = /*@__PURE__*/ _const("item_alt", $for_content__item_alt__closure);
const $for_content__item_n__closure = /*@__PURE__*/ _closure($if_content__item_n, $else_content__item_n);
const $for_content__item_n = /*@__PURE__*/ _const("item_n", $for_content__item_n__closure);
const $for = /*@__PURE__*/ _for_of("#ul/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
