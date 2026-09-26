// tags/list.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = () => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__item_content = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);
const $input$1 = ($scope, input) => $input_item($scope, input.item);
var list_default = /*@__PURE__*/ _template("__tests__/tags/list.marko", $template$2, "b%c", 0, $input$1);

// tags/child.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $item_content__if = /*@__PURE__*/ _if("#text/0", "<span>shown</span>");
const $item_content__show = /*@__PURE__*/ _closure_get("show/5", ($scope) => $item_content__if($scope, $scope._.show ? 0 : 1));
const $item_content__setup = $item_content__show;
const $item_content = /*@__PURE__*/ _content("__tests__/tags/child.marko_1*content", "<!><!><!>", "b%", $item_content__setup);
const $show = /*@__PURE__*/ _let("show/4");
function $setup$1($scope) {
	$show($scope, true);
}
const $input_items = /*@__PURE__*/ _const("input_items", ($scope) => {
	let $item;
	forOf($scope.input_items, (item) => {
		$item = attrTags($item, { content: $item_content($scope) });
	});
	$input_item($scope["#childScope/0"], $item);
});
const $input = ($scope, input) => $input_items($scope, input.items);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button id=add>add</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)($walks$1);
const $items = /*@__PURE__*/ _let("items/2", ($scope) => $input_items($scope["#childScope/1"], $scope.items));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, [...$scope.items, $scope.items?.length + 1]);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$items($scope, [1, 2]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
