// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
function $setup($scope) {
	$input_type($scope["#childScope/0"], card_default);
	$input_text($scope["#childScope/0"], "Hello");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/card.marko
const $template$1 = "<button id=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__item_content = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $if_content__input_item = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__for($scope, [$scope._.input_item]));
const $if_content__setup = $if_content__input_item;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input$1 = ($scope, input) => $input_item($scope, input.item);
const $input_item = /*@__PURE__*/ _const("input_item", $if_content__input_item);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// tags/heading.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $input_type_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $item_content__input_text = /*@__PURE__*/ _closure_get("input_text", ($scope) => _text($scope["#text/1"], $scope._.input_text), 0, "__tests__/tags/heading.marko_1_input_text#4/subscribe");
const $item_content__setup = $item_content__input_text;
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/tags/heading.marko_1*content", "item <!> <!>", "b%c%", $item_content__setup), { i($scope) {
	_text($scope["#text/0"], $scope.i);
} });
const $item_content2 = _content_resume($item_content, 1);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_type = ($scope, input_type) => $dynamicTag($scope, input_type, () => {
	let $item;
	forUntil(2, 0, 1, (i) => {
		$item = attrTags($item, { content: $item_content($scope, { i }) });
	});
	return { item: $item };
});
const $input = ($scope, input) => {
	$input_type($scope, input.type);
	$input_text($scope, input.text);
};
const $input_text__closure = /*@__PURE__*/ _closure($item_content__input_text);
const $input_text = /*@__PURE__*/ _const("input_text", $input_text__closure);
var heading_default = /*@__PURE__*/ _template("__tests__/tags/heading.marko", $template, "b%c", 0, $input);
