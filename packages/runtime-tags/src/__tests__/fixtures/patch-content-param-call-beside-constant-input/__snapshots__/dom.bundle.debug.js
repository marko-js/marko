// tags/row.marko
const $template$3 = "<i> </i>";
const $walks$3 = "D l";
const $setup$3 = ($_) => {};
const $input_x = ($scope, input_x) => _text($scope["#text/0"], input_x);
const $input$3 = ($scope, input) => $input_x($scope, input.x);
var row_default = /*@__PURE__*/ _template("__tests__/tags/row.marko", $template$3, "D l", 0, $input$3);

// tags/each.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = ($_) => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__input_content__OR__item_label = /*@__PURE__*/ _or_patch("__tests__/tags/each.marko_1_input_content#0:4_item_label#3/setup", 4, ($scope) => $for_content__dynamicTag($scope, $scope._.input_content, ($_) => ({ label: $scope.item_label })));
const $for_content__input_content = /*@__PURE__*/ _for_closure_patch("__tests__/tags/each.marko_1_input_content#0:4/setup", "#text/0", $for_content__input_content__OR__item_label, 5);
const $for_content__setup = $for_content__input_content;
const $for_content__item_label = /*@__PURE__*/ _const("item_label", $for_content__input_content__OR__item_label);
const $for_content__$params = ($scope, $params2) => $for_content__item_label($scope, $params2[0]?.label);
const $for = /*@__PURE__*/ _for_of("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_items$2 = ($scope, input_items) => $for($scope, [input_items, "id"]);
const $input$2 = ($scope, input) => {
	$input_items$2($scope, input.items);
	$input_content($scope, input.content);
};
const $input_content = /*@__PURE__*/ _const("input_content", $for_content__input_content);
var each_default = /*@__PURE__*/ _template("__tests__/tags/each.marko", $template$2, "b%c", 0, $input$2);

// tags/list.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $each_content__input_q__OR__label = /*@__PURE__*/ _or_patch("__tests__/tags/list.marko_1_input_q#0:4_label#3/setup", 4, ($scope) => $input_x($scope["#childScope/0"], $scope.label + $scope._.input_q));
const $each_content__input_q = /*@__PURE__*/ _closure_get_patch("__tests__/tags/list.marko_1_input_q#0:4/subscribe", "input_q/5", $each_content__input_q__OR__label, 0, "__tests__/tags/list.marko_0_input_q#4/subscribers", 0);
const $each_content__setup = $each_content__input_q;
const $each_content__label = /*@__PURE__*/ _const("label", $each_content__input_q__OR__label);
const $each_content__$params = ($scope, $params2) => $each_content__label($scope, $params2[0].label);
const $each_content = _content("__tests__/tags/list.marko_1*content", $template$3, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $each_content__setup, $each_content__$params);
function $setup$1($scope) {
	$input_content($scope["#childScope/0"], $each_content($scope));
}
const $input_items$1 = ($scope, input_items) => $input_items$2($scope["#childScope/0"], input_items);
const $input$1 = ($scope, input) => {
	$input_items$1($scope, input.items);
	$input_q($scope, input.q);
};
const $input_q__closure = /*@__PURE__*/ _closure($each_content__input_q);
const $input_q = /*@__PURE__*/ _const("input_q", $input_q__closure);
var list_default = /*@__PURE__*/ _template("__tests__/tags/list.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_q($scope["#childScope/0"], "!");
}
const $input_items = ($scope, input_items) => $input_items$1($scope["#childScope/0"], input_items);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
