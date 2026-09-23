// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
function same(item) {
	return item;
}
const $for_content__item__script = _script("__tests__/tags/child.marko_1_item#2", ($scope) => _attrs_script($scope, "#button/0"));
const $for_content__item = /*@__PURE__*/ _const("item", ($scope) => {
	_attrs_content($scope, "#button/0", {
		...$scope.item,
		...same($scope.item)
	});
	$for_content__item__script($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<button></button>", " ", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);
const $input = ($scope, input) => $input_item($scope, input.item);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $item_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/0"], $scope._.count));
const $item_content__setup = $item_content__count;
const $item_content = _content_resume("__tests__/template.marko_1*content", "One <!>", "b%", $item_content__setup);
const $count__closure = /*@__PURE__*/ _closure($item_content__count);
const $count = /*@__PURE__*/ _let("count/1", ($scope) => {
	$input_item($scope["#childScope/0"], attrTag({
		onClick: $onClick($scope),
		content: $item_content($scope)
	}));
	$count__closure($scope);
});
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$count($scope, 0);
}
const $onClick = ($scope) => function() {
	$count($scope, +$scope.count + 1);
};
_resumed["__tests__/template.marko_0/onClick"] = $onClick;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
