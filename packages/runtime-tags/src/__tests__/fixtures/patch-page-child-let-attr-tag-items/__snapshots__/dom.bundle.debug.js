// tags/card.marko
const $template$1 = "<section><button>clear</button><!></section>";
const $walks$1 = "D b%l";
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__$params = ($scope, $params2) => $for_content__dynamicTag($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<!><!><!>", "b%", 0, $for_content__$params);
const $items = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill0", "items/5", ($scope) => $for($scope, [$scope.items]));
const $input_item = $items;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, []);
}));
const $setup$1 = $setup__script;
const $input$1 = ($scope, input) => $input_item($scope, input.item);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $item_content2__input_label = _closure_resume("__tests__/template.marko_2_input_label#0:3/subscribe", "input_label/4", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_0_input_label#3/subscribers", 1);
const $item_content2__setup = $item_content2__input_label;
const $item_content2 = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<em>two <!></em>", "Db%", $item_content2__setup);
const $item_content__input_label = _closure_resume("__tests__/template.marko_1_input_label#0:3/subscribe", "input_label/4", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_0_input_label#3/subscribers", 0);
const $item_content__setup = $item_content__input_label;
const $item_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<em>one <!></em>", "Db%", $item_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_item($scope["#childScope/0"], attrTags(attrTag({ content: $item_content($scope) }), { content: $item_content2($scope) }));
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($item_content__input_label, $item_content2__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
