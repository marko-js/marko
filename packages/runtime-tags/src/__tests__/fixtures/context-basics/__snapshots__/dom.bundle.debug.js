// settings.marko
const $template$3 = "<!><!><!>";
const $walks$3 = "b%c";
const $input_content_direct$1 = /*@__PURE__*/ _dynamic_tag_content("#text/0");
function $setup$3($scope) {
	$scope["#ContextValue"] = "dark";
	_context_branch($scope, "__tests__/settings.marko");
}
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content$1 = $dynamicTag$1;
const $input$1 = ($scope, input) => $input_content$1($scope, input.content);
var settings_default = /*@__PURE__*/ _template("__tests__/settings.marko", $template$3, "b%c", $setup$3, $input$1);

// tags/cart-size.marko
const $template$2 = "<!><span><!> items</span>";
const $walks$2 = "bD%l";
const $items = ($scope, items) => $items_length($scope, items?.length);
const $items_length = ($scope, items_length) => _text($scope["#text/0"], items_length);
function $setup$2($scope) {
	$items($scope, _context_read($scope, "items", "__tests__/tags/cart-provider.marko", "<cart-provider>"));
}
var cart_size_default = /*@__PURE__*/ _template("__tests__/tags/cart-size.marko", $template$2, $walks$2, $setup$2);

// tags/cart-provider.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
function $setup$1($scope) {
	$scope["#ContextValue"] = [
		"a",
		"b",
		"c"
	];
	_context_branch($scope, "__tests__/tags/cart-provider.marko");
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var cart_provider_default = /*@__PURE__*/ _template("__tests__/tags/cart-provider.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $Settings_content__items = /*@__PURE__*/ _closure_get("items", ($scope) => _text($scope["#text/0"], $scope._.items.join(",")));
const $Settings_content__theme = ($scope, theme) => _text($scope["#text/1"], theme);
const $Settings_content__setup = ($scope) => {
	$Settings_content__items($scope);
	$Settings_content__theme($scope, _context_read($scope, "theme", "__tests__/settings.marko", "./settings.marko"));
};
const $Settings_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<!><div><!>-<!></div>", "bD%c%l", $Settings_content__setup);
const $cartprovider_content__items__closure = /*@__PURE__*/ _closure($Settings_content__items);
const $cartprovider_content__items = /*@__PURE__*/ _const("items", $cartprovider_content__items__closure);
const $cartprovider_content__setup = ($scope) => {
	$setup$2($scope["#childScope/0"]);
	$setup$3($scope["#childScope/1"]);
	$input_content_direct$1($scope["#childScope/1"], $Settings_content($scope));
	$cartprovider_content__items($scope, _context_read($scope, "items", "__tests__/tags/cart-provider.marko", "<cart-provider>"));
};
const $cartprovider_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($template$2, $template$3), /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($walks$2, "b%c"), $cartprovider_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content_direct($scope["#childScope/0"], $cartprovider_content($scope));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
