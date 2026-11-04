// tags/my-list.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = ($_) => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__$params = ($scope, $params2) => $for_content__dynamicTag($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<div><!></div>", "D%", 0, $for_content__$params);
const $input_row = ($scope, input_row) => $for($scope, [input_row]);
const $input$2 = ($scope, input) => $input_row($scope, input.row);
var my_list_default = /*@__PURE__*/ _template("__tests__/tags/my-list.marko", $template$2, "b%c", 0, $input$2);

// tags/wrap.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $row_content__input_label__OR__item = /*@__PURE__*/ _or_patch("__tests__/tags/wrap.marko_1_input_label#0:4_item#1/setup", 2, ($scope) => _text($scope["#text/0"], $scope.item + $scope._.input_label));
const $row_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/tags/wrap.marko_1_input_label#0:4/subscribe", "input_label/5", $row_content__input_label__OR__item, 0, "__tests__/tags/wrap.marko_0_input_label#4/subscribers", 0);
const $row_content__setup = $row_content__input_label;
const $row_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/tags/wrap.marko_1*content", " ", " ", $row_content__setup), { item: $row_content__input_label__OR__item });
const $input_items$1 = /*@__PURE__*/ _const("input_items", ($scope) => {
	let $row;
	forOf($scope.input_items, (item) => {
		$row = attrTags($row, { content: $row_content($scope, { item }) });
	});
	$input_row($scope["#childScope/0"], $row);
});
const $setup__script$1 = _script("__tests__/tags/wrap.marko_0", ($scope) => document.body.dataset.ready = "1");
const $setup$1 = $setup__script$1;
const $input$1 = ($scope, input) => {
	$input_items$1($scope, input.items);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($row_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>rename</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($walks$1);
const $c = _let("c/5", ($scope) => $input_label($scope["#childScope/0"], $scope.c));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$c($scope, $scope.c + "!");
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$c($scope, "c");
	$setup__script($scope);
}
const $input_items = ($scope, input_items) => $input_items$1($scope["#childScope/0"], input_items);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
