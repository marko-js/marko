// tags/list.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = ($_) => {};
const $inputtag_content__row_label = /*@__PURE__*/ _closure_get_patch("__tests__/tags/list.marko_2_row_label#1:5/subscribe", "row_label/6", ($scope) => _text($scope["#text/0"], $scope._.row_label), 0, "__tests__/tags/list.marko_1_row_label#5/subscribers", 0);
const $inputtag_content__setup = $inputtag_content__row_label;
const $inputtag_content = _content("__tests__/tags/list.marko_2*content", " ", " ", $inputtag_content__setup);
_content_resume($inputtag_content);
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtag_content);
const $for_content__input_tag__OR__row_onSelect = /*@__PURE__*/ _or_patch("__tests__/tags/list.marko_1_input_tag#0:4_row_onSelect#3/setup", 4, ($scope) => $for_content__dynamicTag($scope, $scope._.input_tag, ($_) => ({ onClick: $scope.row_onSelect })));
const $for_content__input_tag = /*@__PURE__*/ _for_closure_patch("__tests__/tags/list.marko_1_input_tag#0:4/setup", "#text/0", $for_content__input_tag__OR__row_onSelect, 5);
const $for_content__setup = $for_content__input_tag;
const $for_content__row_onSelect = /*@__PURE__*/ _const("row_onSelect", $for_content__input_tag__OR__row_onSelect);
const $for_content__$params = ($scope, $params2) => {
	$for_content__row_onSelect($scope, $params2[0]?.onSelect);
	$for_content__row_label($scope, $params2[0]?.label);
};
const $for_content__row_label__closure = /*@__PURE__*/ _closure($inputtag_content__row_label);
const $for_content__row_label = /*@__PURE__*/ _const("row_label", $for_content__row_label__closure);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_row = ($scope, input_row) => $for($scope, [input_row]);
const $input$2 = ($scope, input) => {
	$input_row($scope, input.row);
	$input_tag$1($scope, input.tag);
};
const $input_tag$1 = /*@__PURE__*/ _const("input_tag", $for_content__input_tag);
var list_default = /*@__PURE__*/ _template("__tests__/tags/list.marko", $template$2, "b%c", 0, $input$2);

// tags/card.marko
const $template$1 = "<section><button>clear</button><!><!></section>";
const $walks$1 = "D b%b%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2");
const $c = _let("c/6", ($scope) => {
	$dynamicTag($scope, $scope.c);
	$dynamicTag2($scope, $scope.c);
});
const $input_content = $c;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup$1 = $setup__script;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $card_content__input_tag = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_tag#0:4/subscribe", "input_tag/7", ($scope) => $input_tag$1($scope["#childScope/0"], $scope._._.input_tag), ($scope) => $scope._._, "__tests__/template.marko_0_input_tag#4/subscribers", 0);
const $card_content__setup = ($scope) => {
	$card_content__input_tag($scope);
	$card_content__input_items($scope);
	$card_content__input_label($scope);
};
const $card_content__input_items__OR__input_label = /*@__PURE__*/ _or_patch("__tests__/template.marko_2_input_items#0:5_input_label#0:6/setup", 1, ($scope) => {
	let $row;
	forOf($scope._._.input_items, (item) => $row = attrTags($row, {
		label: item,
		onSelect: $onSelect({
			_: $scope,
			"item/10": item
		})
	}));
	$input_row($scope["#childScope/0"], $row);
});
const $card_content__input_items = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_items#0:5/subscribe", "input_items/8", $card_content__input_items__OR__input_label, ($scope) => $scope._._, "__tests__/template.marko_0_input_items#5/subscribers", 0);
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_label#0:6/subscribe", "input_label/9", $card_content__input_items__OR__input_label, ($scope) => $scope._._, "__tests__/template.marko_0_input_label#6/subscribers", 0);
const $card_content = _content("__tests__/template.marko_2*content", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $card_content__setup);
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_items($scope, input.items);
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
const $input_tag__closure = /*@__PURE__*/ _closure($card_content__input_tag);
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_tag__closure);
const $input_items__closure = /*@__PURE__*/ _closure($card_content__input_items);
const $input_items = /*@__PURE__*/ _const("input_items", $input_items__closure);
const $input_label__closure = /*@__PURE__*/ _closure($card_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $onSelect = ($locals) => function() {
	const $scope = $locals._;
	console.log($locals["item/10"], $scope._._.input_label);
};
_bind_resume("__tests__/template.marko_2/onSelect >>input_label", $onSelect);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
