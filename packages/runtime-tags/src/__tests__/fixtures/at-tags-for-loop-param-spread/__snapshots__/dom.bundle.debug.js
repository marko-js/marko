// tags/child.marko
const $template$2 = "<p> </p>";
const $walks$2 = " D l";
const $setup$2 = () => {};
const $input_title = ($scope, input_title) => _attr($scope["#p/0"], "title", input_title);
const $input_text = ($scope, input_text) => _text($scope["#text/1"], input_text);
const $input$1 = ($scope, input) => {
	$input_title($scope, input.title);
	$input_text($scope, input.text);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$2, $walks$2, 0, $input$1);

// tags/list.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__item_content = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);
const $input = ($scope, input) => $input_item($scope, input.item);
var list_default = /*@__PURE__*/ _template("__tests__/tags/list.marko", $template$1, "b%c", 0, $input);

// template.marko
const $Row_content__walks = "D l", $Row_content__template = "<em> </em>";
const $template = /*@__PURE__*/ ((_w0) => `<button id=rename>rename</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $if_content__item_text = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $input_text($scope["#childScope/0"], $scope._.item_text));
const $if_content__setup = ($scope) => {
	$if_content__item_text._($scope);
	$input_title($scope["#childScope/0"], "over");
};
const $Row_content__text = ($scope, text) => _text($scope["#text/0"], text);
const $Row_content__$params = ($scope, $params2) => $Row_content__$temp($scope, $params2?.[0]);
const $Row_content__$temp = ($scope, $temp) => $Row_content__text($scope, $temp.text);
const $item_content__if = /*@__PURE__*/ _if("#text/2", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2), $if_content__setup);
const $item_content__show = /*@__PURE__*/ _closure_get("show", ($scope) => $item_content__if($scope, $scope._.show ? 0 : 1));
const $item_content__setup = $item_content__show;
const $item_content__item_title = ($scope, item_title) => $input_title($scope["#childScope/0"], item_title);
const $item_content__item_text = /*@__PURE__*/ _const("item_text", ($scope) => {
	$input_text($scope["#childScope/0"], $scope.item_text);
	$Row_content__text($scope["#childScope/1"], $scope.item_text);
	$if_content__item_text($scope);
});
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_1*content", /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<!><!>`)($template$2, $Row_content__template), /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&%c`)($walks$2, $Row_content__walks), $item_content__setup), { item($scope) {
	$item_content__item_title($scope, $scope.item?.title);
	$item_content__item_text($scope, $scope.item?.text);
} });
const $show = /*@__PURE__*/ _let("show/2");
const $items = /*@__PURE__*/ _let("items/3", ($scope) => {
	let $item;
	forOf($scope.items, (item) => {
		$item = attrTags($item, { content: $item_content($scope, { item }) });
	});
	$input_item($scope["#childScope/1"], $item);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, $scope.items.map((it) => ({
		text: it.text + "!",
		title: it.title + "!"
	})));
}));
function $setup($scope) {
	$show($scope, true);
	$items($scope, [{
		text: "a",
		title: "ta"
	}, {
		text: "b",
		title: "tb"
	}]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
