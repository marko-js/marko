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
const $template = /*@__PURE__*/ ((_w0) => `<button id=rename>rename</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_1*content", "<p><!>|<!></p>", "D%c%"), {
	item_text($scope) {
		_text($scope["#text/0"], $scope.item_text);
	},
	item($scope) {
		_text($scope["#text/1"], JSON.stringify($scope.item));
	}
});
const $items = /*@__PURE__*/ _let("items/2", ($scope) => {
	let $item;
	forOf($scope.items, (item) => {
		$item = attrTags($item, { content: $item_content($scope, {
			item_text: item?.text,
			item
		}) });
	});
	$input_item($scope["#childScope/1"], $item);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, $scope.items.map((it) => ({ text: it.text + "!" })));
}));
function $setup($scope) {
	$items($scope, [{ text: "a" }, { text: "b" }]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
