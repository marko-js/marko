// tags/v:card.marko.register-default.js
_resumed["__tests__/tags/card.marko"] = card_default;

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1);
function $setup($scope) {
	$input_type($scope["#childScope/0"], card_default);
}
const $input_n = ($scope, input_n) => $input_n$1($scope["#childScope/0"], input_n);
const $input = ($scope, input) => $input_n($scope, input.n);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/card.marko
const $template$2 = "<button id=toggle>toggle</button><!><!>";
const $walks$2 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _fill_join("__tests__/tags/card.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content)));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill1", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$2($scope) {
	$setup__script($scope);
	$open($scope, false);
}
const $input$2 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill0", "input_content", $if_content__input_content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/list.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__item_content = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);
const $input$1 = ($scope, input) => $input_item($scope, input.item);
var list_default = /*@__PURE__*/ _template("__tests__/tags/list.marko", $template$1, "b%c", 0, $input$1);

// tags/heading.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = ($_) => {};
const $inputtype_content__input_n = /*@__PURE__*/ _shell_init("__tests__/tags/heading.marko_2_input_n#0:3/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/heading.marko_fill0", "input_n", /*@__PURE__*/ _closure_get("input_n/5", ($scope) => _text($scope["#text/1"], $scope._._.input_n), ($scope) => $scope._._, "__tests__/tags/heading.marko_2_input_n#0:3/subscribe"), 0));
const $inputtype_content__setup = ($scope) => {
	$inputtype_content__input_n($scope);
	$inputtype_content__i($scope);
};
const $inputtype_content__i = /*@__PURE__*/ _fill_join_closure("__tests__/tags/heading.marko_fill2", "i", /*@__PURE__*/ _closure_get("i/7", ($scope) => _text($scope["#text/0"], $scope._.i), 0, "__tests__/tags/heading.marko_2_i#1:1/subscribe"), 0);
const $inputtype_content = _content("__tests__/tags/heading.marko_2*content", "item <!> of <!>", "b%c%", $inputtype_content__setup);
_content_resume($inputtype_content);
const $item_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtype_content);
const $item_content__input_type = /*@__PURE__*/ _shell_init("__tests__/tags/heading.marko_1_input_type#0:4/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/heading.marko_fill1", "input_type", /*@__PURE__*/ _closure_get("input_type/6", ($scope) => $item_content__dynamicTag($scope, $scope._.input_type), 0, "__tests__/tags/heading.marko_1_input_type#0:4/subscribe"), 0));
const $item_content__setup = $item_content__input_type;
const $item_content__i__closure = /*@__PURE__*/ _closure($inputtype_content__i);
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/tags/heading.marko_1*content", "<!><!><!>", "b%", $item_content__setup), { i: $item_content__i__closure });
const $input_n__closure = /*@__PURE__*/ _closure($inputtype_content__input_n);
const $input_n = /*@__PURE__*/ _fill_const("__tests__/tags/heading.marko_fill0", "input_n", ($scope) => {
	let $item;
	forUntil($scope.input_n, 0, 1, (i) => {
		$item = attrTags($item, { content: $item_content($scope, { i }) });
	});
	$input_item($scope["#childScope/0"], $item);
	$input_n__closure($scope);
});
const $input = ($scope, input) => {
	$input_n($scope, input.n);
	$input_type($scope, input.type);
};
const $input_type__closure = /*@__PURE__*/ _closure($item_content__input_type);
const $input_type = /*@__PURE__*/ _fill_const("__tests__/tags/heading.marko_fill1", "input_type", $input_type__closure);
var heading_default = /*@__PURE__*/ _template("__tests__/tags/heading.marko", $template, $walks, 0, $input);
